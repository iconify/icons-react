import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m009m8q_f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m009m8q_f"/>`,
		"fallback": "fluent-mdl2:flick-up",
	});
}

export default Component;
