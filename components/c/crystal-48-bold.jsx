import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uatz-69tj.css';
import '../../css/k/ktv1jnc2y.css';
import '../../css/d/d68s-bbvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uatz-69tj"/><path class="ktv1jnc2y"/><path class="d68s-bbvr"/>`,
		"fallback": "energy-icons:crystal-48-bold",
	});
}

export default Component;
