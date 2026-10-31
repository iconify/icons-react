import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qkpfnb8wp.css';
import '../../css/t/tfgm0hbpa.css';
import '../../css/n/nmubkyb5g.css';
import '../../css/w/wgg3jmb7e.css';
import '../../css/m/mg-52mbpb.css';
import '../../css/x/xzkauxcix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qkpfnb8wp wm-shadow"/><path class="tfgm0hbpa"/><path class="nmubkyb5g"/><path class="wgg3jmb7e"/><path class="mg-52mbpb"/><path class="xzkauxcix"/></g>`,
		"fallback": "withicons-retro:fence",
	});
}

export default Component;
