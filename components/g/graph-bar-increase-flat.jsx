import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckuw6zbsm.css';
import '../../css/w/w3y3mchcu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ckuw6zbsm"/><path class="w3y3mchcu"/></g>`,
		"fallback": "streamline-plump-color:graph-bar-increase-flat",
	});
}

export default Component;
