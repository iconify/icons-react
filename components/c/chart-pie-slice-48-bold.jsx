import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crxzhebgb.css';
import '../../css/r/rpsqcp5fk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crxzhebgb"/><path class="rpsqcp5fk"/>`,
		"fallback": "energy-icons:chart-pie-slice-48-bold",
	});
}

export default Component;
