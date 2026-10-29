import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vr4q576zk.css';
import '../../css/d/d5q-cib-y.css';
import '../../css/u/ughaqt5-i.css';
import '../../css/t/t7bxpzblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vr4q576zk wm-k"/><path class="d5q-cib-y wm-k"/><path class="ughaqt5-i wm-k"/><path class="t7bxpzblz wm-k"/></g>`,
		"fallback": "withicons:avatar-dino-sketch",
	});
}

export default Component;
