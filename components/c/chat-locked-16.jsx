import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxex4oboi.css';
import '../../css/i/i-lfmccxy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxex4oboi"/><path class="i-lfmccxy"/>`,
		"fallback": "octicon:chat-locked-16",
	});
}

export default Component;
