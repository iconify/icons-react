import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hlf7cfptm.css';
import '../../css/c/c_loxking.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hlf7cfptm"/><path class="c_loxking"/></g>`,
		"fallback": "withicons:chevron-down-sketch",
	});
}

export default Component;
