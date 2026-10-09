import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd5r-ktwc.css';
import '../../css/u/u81anactb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd5r-ktwc"/><path class="u81anactb"/>`,
		"fallback": "energy-icons:chart-scatter-20-bold",
	});
}

export default Component;
