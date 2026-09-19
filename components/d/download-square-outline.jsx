import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3qqh9zsw.css';
import '../../css/c/ct42dfb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m3qqh9zsw"/><path class="ct42dfb0y"/></g>`,
		"fallback": "iconoir:download-square-outline",
	});
}

export default Component;
