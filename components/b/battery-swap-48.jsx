import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt8xwbbsb.css';
import '../../css/a/aj9_10d2s.css';
import '../../css/h/hyvw0_owe.css';
import '../../css/o/o1jpsm7ux.css';
import '../../css/r/rdv1nzp9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt8xwbbsb"/><path class="aj9_10d2s"/><path class="hyvw0_owe"/><path class="o1jpsm7ux"/><path class="rdv1nzp9h"/>`,
		"fallback": "energy-icons:battery-swap-48",
	});
}

export default Component;
