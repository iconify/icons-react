import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f8d68ubjr.css';
import '../../css/j/jaqvtxnxo.css';
import '../../css/i/ii24yqw_c.css';
import '../../css/a/af81mcbod.css';
import '../../css/w/whigfibpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f8d68ubjr wm-shadow"/><path class="jaqvtxnxo"/><path class="ii24yqw_c"/><path class="af81mcbod"/><path class="whigfibpk wm-s"/></g>`,
		"fallback": "withicons-retro:flip-horizontal",
	});
}

export default Component;
