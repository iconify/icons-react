import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oum63jbgm.css';
import '../../css/d/dg95q9b0l.css';
import '../../css/g/g7b-z_b_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oum63jbgm"/><path class="dg95q9b0l"/><path class="g7b-z_b_l"/>`,
		"fallback": "energy-icons:flywheel-48-bold",
	});
}

export default Component;
