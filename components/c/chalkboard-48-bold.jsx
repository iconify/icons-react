import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbzronb6t.css';
import '../../css/d/dok_l2b-c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbzronb6t"/><path class="dok_l2b-c"/>`,
		"fallback": "energy-icons:chalkboard-48-bold",
	});
}

export default Component;
