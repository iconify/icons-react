import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lemzthfhi.css';
import '../../css/l/l-fafkwmc.css';
import '../../css/s/slj04ubjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lemzthfhi"/><path class="l-fafkwmc"/><path class="slj04ubjt"/></g>`,
		"fallback": "hugeicons:hierarchy-square-07",
	});
}

export default Component;
