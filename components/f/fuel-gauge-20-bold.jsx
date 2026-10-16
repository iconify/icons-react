import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e75-znlde.css';
import '../../css/m/mx7qgn1xx.css';
import '../../css/q/qviq0ilhh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e75-znlde"/><path class="mx7qgn1xx"/><path class="qviq0ilhh"/>`,
		"fallback": "energy-icons:fuel-gauge-20-bold",
	});
}

export default Component;
