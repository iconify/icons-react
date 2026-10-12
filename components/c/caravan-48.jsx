import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2gdnrblg.css';
import '../../css/l/l8kp85irh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2gdnrblg"/><path class="l8kp85irh"/>`,
		"fallback": "energy-icons:caravan-48",
	});
}

export default Component;
