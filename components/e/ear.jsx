import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/ndk_hsbgz.css';
import '../../css/h/hro4v6b4h.css';
import '../../css/a/absc_wbnh.css';
import '../../css/y/yu9681bhf.css';
import '../../css/q/qf8xdsqsi.css';
import '../../css/d/dn480dbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ndk_hsbgz wm-shadow"/><path class="hro4v6b4h"/><path class="absc_wbnh"/><path class="yu9681bhf"/><path class="qf8xdsqsi"/><path class="dn480dbke"/></g>`,
		"fallback": "withicons-retro:ear",
	});
}

export default Component;
