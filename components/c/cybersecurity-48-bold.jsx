import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4447fbqf.css';
import '../../css/k/kog434b-z.css';
import '../../css/t/txwpp5b_c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4447fbqf"/><path class="kog434b-z"/><path class="txwpp5b_c"/>`,
		"fallback": "energy-icons:cybersecurity-48-bold",
	});
}

export default Component;
