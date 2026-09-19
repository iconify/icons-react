import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t847b0bwz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t847b0bwz"/>`,
		"fallback": "fluent-mdl2:focus-view",
	});
}

export default Component;
