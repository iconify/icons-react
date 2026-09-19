import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kd63trbiu.css';
import '../../css/a/a0k4-acbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kd63trbiu"/><path class="a0k4-acbt"/></g>`,
		"fallback": "iconoir:ev-tag",
	});
}

export default Component;
