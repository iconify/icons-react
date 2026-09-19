import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dmy1ecbxg.css';
import '../../css/a/a0k4-acbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dmy1ecbxg"/><path class="a0k4-acbt"/></g>`,
		"fallback": "iconoir:bluetooth-rounded",
	});
}

export default Component;
