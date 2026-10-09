import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p83hrs6_m.css';
import '../../css/z/zy1--_bqv.css';
import '../../css/e/ewz0dq5ob.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p83hrs6_m"/><path class="zy1--_bqv"/><path class="ewz0dq5ob"/>`,
		"fallback": "energy-icons:buoy-48-bold",
	});
}

export default Component;
