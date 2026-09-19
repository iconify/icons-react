import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ydu9-nbzw.css';
import '../../css/c/c2c3sqbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ydu9-nbzw"/><path class="c2c3sqbpk"/></g>`,
		"fallback": "hugeicons:delivery-truck-01",
	});
}

export default Component;
