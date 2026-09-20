import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vku-3ub_z.css';
import '../../css/l/l5dckkl4f.css';
import '../../css/m/mtt1kdbry.css';
import '../../css/t/t-a9dukij.css';
import '../../css/n/nzay1dbcq.css';
import '../../css/j/j4lbajbaj.css';
import '../../css/s/sb58d8b-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vku-3ub_z"/><path class="l5dckkl4f"/><path class="mtt1kdbry"/><path class="t-a9dukij"/><path class="nzay1dbcq"/><path class="j4lbajbaj"/><path class="sb58d8b-m"/>`,
		"fallback": "selfhst:elastic",
	});
}

export default Component;
