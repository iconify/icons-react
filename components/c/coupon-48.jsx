import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlkz-3bot.css';
import '../../css/x/x5r2fk28b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlkz-3bot"/><path class="x5r2fk28b"/>`,
		"fallback": "energy-icons:coupon-48",
	});
}

export default Component;
