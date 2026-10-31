import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/ts1quhbqg.css';
import '../../css/r/ryqe3dhfd.css';
import '../../css/l/l2-_tysgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGCtP4PeZz" x1="8.5" x2="14.5" y1="1.01" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGCtP4PeZz)" class="ts1quhbqg"/><path class="ryqe3dhfd wm-a"/><path class="l2-_tysgt wm-shine"/></g>`,
		"fallback": "withicons-utsav:hand-coins",
	});
}

export default Component;
