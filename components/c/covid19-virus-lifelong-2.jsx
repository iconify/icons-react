import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h8p15cbii.css';
import '../../css/r/r69ayccag.css';
import '../../css/j/jf3olmd2h.css';
import '../../css/q/qx83d1bnt.css';
import '../../css/z/zxbodo27b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h8p15cbii"/><path class="r69ayccag"/><path class="jf3olmd2h"/><path class="qx83d1bnt"/><path class="zxbodo27b"/></g>`,
		"fallback": "covid:covid19-virus-lifelong-2",
	});
}

export default Component;
