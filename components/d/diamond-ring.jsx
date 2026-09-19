import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rbb69cszp.css';
import '../../css/n/n1jldjbbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="rbb69cszp"/><path class="n1jldjbbr"/></g>`,
		"fallback": "icon-park:diamond-ring",
	});
}

export default Component;
