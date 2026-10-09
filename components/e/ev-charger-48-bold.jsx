import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rin2rdbyp.css';
import '../../css/y/yoo-x4z3f.css';
import '../../css/d/d27j7obsk.css';
import '../../css/q/qb_7iivgy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rin2rdbyp"/><path class="yoo-x4z3f"/><path class="d27j7obsk"/><path class="qb_7iivgy"/>`,
		"fallback": "energy-icons:ev-charger-48-bold",
	});
}

export default Component;
