import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfysi3jfl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfysi3jfl"/>`,
		"fallback": "fluent-mdl2:event-tentative",
	});
}

export default Component;
