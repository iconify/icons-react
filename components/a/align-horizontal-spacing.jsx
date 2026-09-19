import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dokfz_bzr.css';
import '../../css/c/ceyquq90j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dokfz_bzr"/><path class="ceyquq90j"/></g>`,
		"fallback": "iconoir:align-horizontal-spacing",
	});
}

export default Component;
