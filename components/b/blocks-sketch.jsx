import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e4auw9bfl.css';
import '../../css/z/z6rfwvb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e4auw9bfl"/><path class="wm-k z6rfwvb1c"/></g>`,
		"fallback": "withicons:blocks-sketch",
	});
}

export default Component;
