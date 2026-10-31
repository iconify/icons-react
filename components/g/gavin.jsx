import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvk8mlb_x.css';
import '../../css/d/drg-9dbik.css';
import '../../css/e/e4y595zea.css';
import '../../css/h/h1ztcpblv.css';
import '../../css/s/shbynwbob.css';
import '../../css/z/zzxuksste.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uvk8mlb_x"/><path class="drg-9dbik"/><path class="e4y595zea"/><path class="h1ztcpblv"/><path class="shbynwbob"/><path class="zzxuksste"/></g>`,
		"fallback": "streamline-memes:gavin",
	});
}

export default Component;
