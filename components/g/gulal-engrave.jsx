import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dyaoiwbdt.css';
import '../../css/e/e4ah3s40h.css';
import '../../css/g/gtsijyait.css';
import '../../css/c/c8y0i6bzf.css';
import '../../css/f/f4cbm8b-g.css';
import '../../css/o/o8qldyb_u.css';
import '../../css/x/xcsr4c2yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dyaoiwbdt wm-k"/><path class="e4ah3s40h wm-a"/><path class="gtsijyait wm-s"/><path class="c8y0i6bzf wm-shadow"/><path class="f4cbm8b-g wm-k"/><path class="o8qldyb_u wm-a"/><path class="wm-s xcsr4c2yc"/></g>`,
		"fallback": "withicons:gulal-engrave",
	});
}

export default Component;
