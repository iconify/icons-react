import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2do86btb.css';
import '../../css/w/wh481vbyd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2do86btb"/><path class="wh481vbyd"/>`,
		"fallback": "energy-icons:insulation-roll-20-bold",
	});
}

export default Component;
