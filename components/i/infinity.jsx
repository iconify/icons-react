import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/plvza9b3h.css';
import '../../css/w/wd3vufbvr.css';
import '../../css/j/jm9zyqicg.css';
import '../../css/m/mxv_rthvy.css';
import '../../css/d/dvmbsvbya.css';
import '../../css/l/lpjkbubap.css';
import '../../css/h/hh-lvsb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="plvza9b3h wm-shadow"/><path class="wd3vufbvr wm-k"/><path class="jm9zyqicg wm-k"/><path class="mxv_rthvy wm-k"/><path class="dvmbsvbya wm-k"/><path class="lpjkbubap wm-k"/><path class="hh-lvsb3l wm-k"/></g>`,
		"fallback": "withicons-gothic:infinity",
	});
}

export default Component;
