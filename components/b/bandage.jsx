import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vfbujob0h.css';
import '../../css/e/e2rsjzi7d.css';
import '../../css/e/e00b0o2og.css';
import '../../css/e/eypjnpb6p.css';
import '../../css/e/exlc4bbvh.css';
import '../../css/f/f3572mbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vfbujob0h wm-shadow"/><path class="e2rsjzi7d wm-shadow"/><path class="e00b0o2og"/><path class="eypjnpb6p"/><path class="exlc4bbvh"/><path class="f3572mbsy"/></g>`,
		"fallback": "withicons-brutal:bandage",
	});
}

export default Component;
