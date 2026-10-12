import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwfge_h7v.css';
import '../../css/x/x54t9obpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dwfge_h7v"/><path class="x54t9obpz"/></g>`,
		"fallback": "andrsrxn:dislike-filled",
	});
}

export default Component;
