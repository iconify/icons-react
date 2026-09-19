import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vt_qn5bdz.css';
import '../../css/j/jfzf5xxob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vt_qn5bdz"/><path class="jfzf5xxob"/></g>`,
		"fallback": "iconoir:fridge",
	});
}

export default Component;
