import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q8u41tj8g.css';
import '../../css/e/e8igd9bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q8u41tj8g wm-k"/><path class="e8igd9bxa wm-k"/></g>`,
		"fallback": "withicons:chevron-right-sketch",
	});
}

export default Component;
