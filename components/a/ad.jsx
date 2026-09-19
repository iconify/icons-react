import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgq_3dz5s.css';
import '../../css/v/v6tj5lb1y.css';
import '../../css/i/ite4rnbur.css';
import '../../css/h/h1hal_are.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mgq_3dz5s"/><path class="v6tj5lb1y"/><path class="ite4rnbur"/><path class="h1hal_are"/></g>`,
		"fallback": "icon-park-outline:ad",
	});
}

export default Component;
