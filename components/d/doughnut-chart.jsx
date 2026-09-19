import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpdmhbaas.css';
import '../../css/l/l1sro9b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpdmhbaas"/><path class="l1sro9b1x"/>`,
		"fallback": "bxs:doughnut-chart",
	});
}

export default Component;
