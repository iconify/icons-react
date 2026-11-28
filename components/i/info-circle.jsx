import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/s/slaaubcmq.css';
import '../../css/m/m4c9ac46w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="slaaubcmq"/><path class="m4c9ac46w"/></g>`,
		"fallback": "iconaut:info-circle",
	});
}

export default Component;
