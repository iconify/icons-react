import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxlm-sbwz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxlm-sbwz"/>`,
		"fallback": "osmic:alpine-hut-14",
	});
}

export default Component;
