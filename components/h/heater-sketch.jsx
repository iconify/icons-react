import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oua51pdjw.css';
import '../../css/n/nncr0gjwr.css';
import '../../css/h/h3f-tbb6j.css';
import '../../css/v/vy9khb81y.css';
import '../../css/c/cwe0l_ktm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oua51pdjw"/><path class="nncr0gjwr wm-s"/><path class="h3f-tbb6j wm-k"/><path class="vy9khb81y wm-a"/><path class="cwe0l_ktm wm-s"/></g>`,
		"fallback": "withicons:heater-sketch",
	});
}

export default Component;
