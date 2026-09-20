import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hbl0xbc2l.css';
import '../../css/x/xjlgtab5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hbl0xbc2l"/><path class="xjlgtab5d"/></g>`,
		"fallback": "proicons:cancel-square",
	});
}

export default Component;
