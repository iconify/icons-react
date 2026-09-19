import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oz-ooxwjh.css';
import '../../css/c/cnwp86box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oz-ooxwjh"/><path class="cnwp86box"/></g>`,
		"fallback": "iconoir:apple",
	});
}

export default Component;
