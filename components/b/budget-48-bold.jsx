import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_pz3rxhk.css';
import '../../css/q/qu3n5acxu.css';
import '../../css/o/osw6h0b9v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_pz3rxhk"/><path class="qu3n5acxu"/><path class="osw6h0b9v"/>`,
		"fallback": "energy-icons:budget-48-bold",
	});
}

export default Component;
