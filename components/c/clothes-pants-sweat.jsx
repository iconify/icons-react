import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/d4pk4lb2r.css';
import '../../css/v/v8a7znbsz.css';
import '../../css/o/obus3ibxa.css';
import '../../css/e/e8p-hhctq.css';
import '../../css/d/dnmy8bb7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="d4pk4lb2r"/><path class="v8a7znbsz"/><path class="obus3ibxa"/><path class="e8p-hhctq"/><path class="dnmy8bb7v"/></g>`,
		"fallback": "icon-park:clothes-pants-sweat",
	});
}

export default Component;
