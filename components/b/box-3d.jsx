import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lo7e-wbln.css';
import '../../css/a/azf-tyuln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lo7e-wbln"/><path class="azf-tyuln"/></g>`,
		"fallback": "mage:box-3d",
	});
}

export default Component;
