import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c750knbff.css';
import '../../css/l/l_t-shbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c750knbff wm-k"/><path class="l_t-shbzk wm-k"/></g>`,
		"fallback": "withicons:braces-sketch",
	});
}

export default Component;
