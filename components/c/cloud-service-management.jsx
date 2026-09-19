import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl8z71bau.css';
import '../../css/y/yfddwd_7g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl8z71bau"/><path class="yfddwd_7g"/>`,
		"fallback": "carbon:cloud-service-management",
	});
}

export default Component;
