import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kt_m-joux.css';
import '../../css/m/mh7ucwbev.css';
import '../../css/q/ql6hqqjvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="kt_m-joux"/><path class="mh7ucwbev"/><path class="ql6hqqjvi"/></g>`,
		"fallback": "icon-park-outline:hospital",
	});
}

export default Component;
