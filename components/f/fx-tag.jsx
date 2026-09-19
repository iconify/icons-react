import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a0k4-acbt.css';
import '../../css/o/or907rsmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a0k4-acbt"/><path class="or907rsmb"/></g>`,
		"fallback": "iconoir:fx-tag",
	});
}

export default Component;
