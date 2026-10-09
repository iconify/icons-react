import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4o5g2bkn.css';
import '../../css/o/opyhqybqx.css';
import '../../css/r/ruxeqsb0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4o5g2bkn"/><path class="opyhqybqx"/><path class="ruxeqsb0l"/>`,
		"fallback": "energy-icons:goal-48",
	});
}

export default Component;
