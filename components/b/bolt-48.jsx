import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmx1_t3-b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmx1_t3-b"/>`,
		"fallback": "energy-icons:bolt-48",
	});
}

export default Component;
