import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/rko2-db7p.css';
import '../../css/r/rnnbgerpx.css';
import '../../css/o/o2n87zbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5LQ1tbVF" x1="8.62" x2="14.62" y1="2" y2="22.73" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG5LQ1tbVF)" class="rko2-db7p"/><path class="rnnbgerpx wm-a"/><path class="o2n87zbvm wm-shine"/></g>`,
		"fallback": "withicons-utsav:broom",
	});
}

export default Component;
