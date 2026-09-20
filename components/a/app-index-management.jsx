import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vg8yw9b0x.css';
import '../../css/t/te6hxebbf.css';
import '../../css/p/ptpauvbsu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vg8yw9b0x"/><path class="ouiIcon__fillSecondary te6hxebbf"/><path class="ptpauvbsu"/></g>`,
		"fallback": "oui:app-index-management",
	});
}

export default Component;
