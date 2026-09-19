import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/td4tty4ni.css';
import '../../css/v/vp97hcpog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="td4tty4ni"/><path class="vp97hcpog"/></g>`,
		"fallback": "iconoir:car",
	});
}

export default Component;
