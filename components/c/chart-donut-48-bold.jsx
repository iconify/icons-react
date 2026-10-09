import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4vli7ncu.css';
import '../../css/q/qkvjsbbnn.css';
import '../../css/k/klpkadckn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4vli7ncu"/><path class="qkvjsbbnn"/><path class="klpkadckn"/>`,
		"fallback": "energy-icons:chart-donut-48-bold",
	});
}

export default Component;
