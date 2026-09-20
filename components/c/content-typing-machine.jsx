import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ewv6c6v4z.css';
import '../../css/t/tfkfl2pjl.css';
import '../../css/s/sh6_4l7tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ewv6c6v4z"/><path class="tfkfl2pjl"/><path class="sh6_4l7tj"/></g>`,
		"fallback": "streamline-ultimate:content-typing-machine",
	});
}

export default Component;
