import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/xnw9d--2s.css';
import '../../css/o/ocf_i1e-e.css';
import '../../css/i/imxae9b1m.css';
import '../../css/d/dujlioqlr.css';
import '../../css/f/fmfhktm-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMEqEgdLs" x1="9" x2="15" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGMEqEgdLs)" class="xnw9d--2s"/><path class="ocf_i1e-e wm-a"/><path class="imxae9b1m wm-shine"/><path class="dujlioqlr wm-shine"/><path class="fmfhktm-l wm-shine"/></g>`,
		"fallback": "withicons-utsav:gallery-horizontal",
	});
}

export default Component;
