import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd6_1xb5y.css';
import '../../css/x/xo32v0bez.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd6_1xb5y"/><path class="xo32v0bez"/>`,
		"fallback": "energy-icons:chart-network-20-bold",
	});
}

export default Component;
