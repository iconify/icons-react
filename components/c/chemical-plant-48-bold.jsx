import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrqswgbvv.css';
import '../../css/o/o802_lbsb.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrqswgbvv"/><path class="o802_lbsb"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:chemical-plant-48-bold",
	});
}

export default Component;
