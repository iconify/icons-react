import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxyv9z9mh.css';
import '../../css/t/tdbf0ac8z.css';
import '../../css/u/up7kqjfut.css';
import '../../css/p/p5vme2esg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="yxyv9z9mh"><path class="tdbf0ac8z"/><path class="up7kqjfut"/><path class="p5vme2esg"/></g>`,
		"fallback": "streamline-cyber-color:bicycle-1",
	});
}

export default Component;
