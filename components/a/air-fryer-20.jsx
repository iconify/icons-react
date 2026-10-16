import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7yzfib3b.css';
import '../../css/v/vwz64_bea.css';
import '../../css/s/srjhv05-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7yzfib3b"/><path class="vwz64_bea"/><path class="srjhv05-x"/>`,
		"fallback": "energy-icons:air-fryer-20",
	});
}

export default Component;
