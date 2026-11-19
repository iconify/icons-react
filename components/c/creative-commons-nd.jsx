import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkakhcc8x.css';
import '../../css/w/wlkfm_abl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pkakhcc8x"/><path class="wlkfm_abl"/></g>`,
		"fallback": "andrsrxn:creative-commons-nd",
	});
}

export default Component;
