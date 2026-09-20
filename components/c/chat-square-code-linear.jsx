import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xjes2kbti.css';
import '../../css/y/yzbzu_bof.css';
import '../../css/v/vxiwx7bjr.css';
import '../../css/e/eq3frqb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xjes2kbti"/><path class="yzbzu_bof"/><path class="vxiwx7bjr"/><path class="eq3frqb0l"/></g>`,
		"fallback": "solar:chat-square-code-linear",
	});
}

export default Component;
