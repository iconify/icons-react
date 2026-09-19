import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww5lr-bzr.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww5lr-bzr"/>`,
		"fallback": "fa6-solid:gun",
	});
}

export default Component;
