import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf77lbef.css';
import '../../css/o/osoqj_bgb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf77lbef"/><path class="osoqj_bgb"/>`,
		"fallback": "energy-icons:chart-bubble-48",
	});
}

export default Component;
