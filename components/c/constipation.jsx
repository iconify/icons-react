import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ii4fhcmmj.css';
import '../../css/m/ma0gmc9og.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ii4fhcmmj"/><path class="ma0gmc9og"/></g>`,
		"fallback": "healthicons:constipation",
	});
}

export default Component;
