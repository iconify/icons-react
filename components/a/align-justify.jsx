import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3p-ueb3i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3p-ueb3i"/>`,
		"fallback": "fluent-mdl2:align-justify",
	});
}

export default Component;
