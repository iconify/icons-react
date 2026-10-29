import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g030v4bxk.css';
import '../../css/p/pxzi-t71n.css';
import '../../css/z/z9lxt0bea.css';
import '../../css/s/sqyp4qbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g030v4bxk"/><path class="pxzi-t71n wm-a"/><path class="wm-k z9lxt0bea"/><path class="sqyp4qbff wm-a"/></g>`,
		"fallback": "withicons:badge-alert-sketch",
	});
}

export default Component;
