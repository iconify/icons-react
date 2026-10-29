import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j1lgilbbk.css';
import '../../css/i/i_e-t-x2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j1lgilbbk wm-k"/><path class="i_e-t-x2o wm-a"/></g>`,
		"fallback": "withicons:avatar-tiger-sketch",
	});
}

export default Component;
