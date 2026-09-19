import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psf_9jbyo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psf_9jbyo"/>`,
		"fallback": "fa7-solid:hippo",
	});
}

export default Component;
