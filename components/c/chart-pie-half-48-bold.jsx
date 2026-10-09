import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4ebx7sgh.css';
import '../../css/e/ebm8rubrc.css';
import '../../css/v/vskvwtb5j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4ebx7sgh"/><path class="ebm8rubrc"/><path class="vskvwtb5j"/>`,
		"fallback": "energy-icons:chart-pie-half-48-bold",
	});
}

export default Component;
