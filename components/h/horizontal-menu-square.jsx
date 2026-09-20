import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qehczibes.css';
import '../../css/c/ckl3xtors.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qehczibes"/><path class="ckl3xtors"/></g>`,
		"fallback": "streamline-sharp:horizontal-menu-square",
	});
}

export default Component;
