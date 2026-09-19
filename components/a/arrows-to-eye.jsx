import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfyajdbey.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfyajdbey"/>`,
		"fallback": "fa7-solid:arrows-to-eye",
	});
}

export default Component;
