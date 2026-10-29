import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ejopvybvf.css';
import '../../css/n/n-xoksf_a.css';
import '../../css/k/k6v14padp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ejopvybvf"/><path class="n-xoksf_a wm-shadow"/><path class="k6v14padp"/></g>`,
		"fallback": "withicons:align-left-engrave",
	});
}

export default Component;
