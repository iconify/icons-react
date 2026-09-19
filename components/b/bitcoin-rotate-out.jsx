import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kedgqhb0m.css';
import '../../css/c/c8gr5rb1v.css';
import '../../css/x/xrp0be2xv.css';
import '../../css/y/yn02h8b2q.css';
import '../../css/z/z0omtlbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kedgqhb0m"/><path class="c8gr5rb1v"/><path class="xrp0be2xv"/><path class="yn02h8b2q"/><path class="z0omtlbfx"/></g>`,
		"fallback": "iconoir:bitcoin-rotate-out",
	});
}

export default Component;
