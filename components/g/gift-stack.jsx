import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dbcu5ybto.css';
import '../../css/i/ip1bi0joi.css';
import '../../css/h/hngbmnvfa.css';
import '../../css/q/qcys2db0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dbcu5ybto wm-k"/><path class="ip1bi0joi wm-a"/><path class="hngbmnvfa"/><path class="qcys2db0e"/></g>`,
		"fallback": "withicons-bauhaus:gift-stack",
	});
}

export default Component;
