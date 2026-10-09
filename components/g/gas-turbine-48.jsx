import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob-pomunx.css';
import '../../css/v/vq2he1abb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob-pomunx"/><path class="vq2he1abb"/>`,
		"fallback": "energy-icons:gas-turbine-48",
	});
}

export default Component;
