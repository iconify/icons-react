import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/t/tox8q-y9i.css';
import '../../css/e/e5kjo0klq.css';
import '../../css/o/oi1iou_7q.css';
import '../../css/c/ck_dcj5pz.css';
import '../../css/d/d-e49z9xv.css';
import '../../css/y/yo2y7cbzb.css';
import '../../css/d/duzur3bjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGSnH8mpum" cx="7.2" cy="6" r="24" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="tox8q-y9i wm-shadow"/><path class="e5kjo0klq wm-shadow"/><circle class="oi1iou_7q wm-k"/><path fill="url(#SVGSnH8mpum)" class="ck_dcj5pz wm-k"/><path stroke="url(#SVGSnH8mpum)" class="d-e49z9xv wm-k"/><path class="wm-shine yo2y7cbzb"/><circle class="duzur3bjj wm-a"/></g>`,
		"fallback": "withicons-rangoli:crosshair",
	});
}

export default Component;
