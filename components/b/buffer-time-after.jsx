import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la9q-q5df.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la9q-q5df"/>`,
		"fallback": "fluent-mdl2:buffer-time-after",
	});
}

export default Component;
