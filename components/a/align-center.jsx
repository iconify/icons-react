import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3pkaci9r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3pkaci9r"/>`,
		"fallback": "fluent-mdl2:align-center",
	});
}

export default Component;
