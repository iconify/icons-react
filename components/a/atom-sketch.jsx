import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zy_i0dujb.css';
import '../../css/c/co_xlv55c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zy_i0dujb"/><path class="co_xlv55c wm-a"/></g>`,
		"fallback": "withicons:atom-sketch",
	});
}

export default Component;
