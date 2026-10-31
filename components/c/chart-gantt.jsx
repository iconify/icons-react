import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/r/r1dtk_b6h.css';
import '../../css/g/gdklhabge.css';
import '../../css/g/gwyp4rbwb.css';
import '../../css/f/fhph96w3i.css';
import '../../css/l/lhzzx0rzi.css';
import '../../css/p/p-v-6bc3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGmsFW4bUG" cx="3.16" cy="6.46" r="18.15" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="r1dtk_b6h wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="gdklhabge wm-a"/><path fill="url(#SVGmsFW4bUG)" class="gwyp4rbwb wm-k"/><path class="fhph96w3i wm-shine"/><path class="lhzzx0rzi wm-deco"/><path class="p-v-6bc3q wm-deco"/></g>`,
		"fallback": "withicons-rangoli:chart-gantt",
	});
}

export default Component;
