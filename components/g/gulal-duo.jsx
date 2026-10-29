import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m0xij_otn.css';
import '../../css/e/echwhcbfg.css';
import '../../css/s/sd77o9bse.css';
import '../../css/x/xcsr4c2yc.css';
import '../../css/f/f4cbm8b-g.css';
import '../../css/o/o8qldyb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m0xij_otn"/><path class="echwhcbfg wm-a"/><path class="sd77o9bse wm-s"/><path class="wm-s xcsr4c2yc"/><path class="f4cbm8b-g"/><path class="o8qldyb_u wm-a"/></g>`,
		"fallback": "withicons:gulal-duo",
	});
}

export default Component;
