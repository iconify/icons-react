import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4447fbqf.css';
import '../../css/u/u7ss4zbra.css';
import '../../css/o/otee45b1n.css';
import '../../css/h/hyo77xj8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4447fbqf"/><path class="u7ss4zbra"/><path class="otee45b1n"/><path class="hyo77xj8y"/>`,
		"fallback": "energy-icons:frost-protection-48-bold",
	});
}

export default Component;
