import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/c9ns0wb1n.css';
import '../../css/m/mnw43chky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="c9ns0wb1n"/><path class="mnw43chky"/></g>`,
		"fallback": "mage:dashboard-circle-bar",
	});
}

export default Component;
