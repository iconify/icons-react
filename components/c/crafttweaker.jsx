import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay1z2s6ca.css';

const viewBox = {"width":500,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay1z2s6ca"/>`,
		"fallback": "file-icons:crafttweaker",
	});
}

export default Component;
