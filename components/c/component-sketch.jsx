import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sbndeccgb.css';
import '../../css/s/sqr5ssbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sbndeccgb wm-k"/><path class="sqr5ssbvv wm-a"/></g>`,
		"fallback": "withicons:component-sketch",
	});
}

export default Component;
