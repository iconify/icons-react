import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n--umek2k.css';
import '../../css/w/w7-r9c5xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n--umek2k"/><path class="w7-r9c5xo"/></g>`,
		"fallback": "iconoir:cloud-check",
	});
}

export default Component;
