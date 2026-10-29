import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dhopsub9e.css';
import '../../css/d/dk_ez364w.css';
import '../../css/a/awkb7aczt.css';
import '../../css/o/onnvrjbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dhopsub9e"/><path class="dk_ez364w wm-a"/><path class="awkb7aczt wm-k"/><path class="onnvrjbep wm-a"/></g>`,
		"fallback": "withicons:avatar-robot-sketch",
	});
}

export default Component;
