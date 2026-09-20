import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l-1ucdbni.css';
import '../../css/n/nd1h41chj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l-1ucdbni"/><path class="nd1h41chj"/></g>`,
		"fallback": "keyline-icons:circle-caret-left-sharp",
	});
}

export default Component;
