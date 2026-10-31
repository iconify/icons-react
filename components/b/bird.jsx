import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/epl9gvs4m.css';
import '../../css/q/q7vib97in.css';
import '../../css/h/hfz7gx23v.css';
import '../../css/o/orwqd-bab.css';
import '../../css/h/hkbka9biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="epl9gvs4m wm-shadow"/><path class="q7vib97in"/><path class="hfz7gx23v"/><path class="orwqd-bab"/><path class="hkbka9biu"/></g>`,
		"fallback": "withicons-retro:bird",
	});
}

export default Component;
