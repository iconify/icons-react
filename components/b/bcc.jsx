import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aks3nvbim.css';
import '../../css/y/y0j3dsbrq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="aks3nvbim"/><path class="y0j3dsbrq"/></g>`,
		"fallback": "cryptocurrency-color:bcc",
	});
}

export default Component;
