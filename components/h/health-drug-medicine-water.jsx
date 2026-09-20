import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2lo1actl.css';
import '../../css/u/utw1vrodv.css';
import '../../css/y/y016e8ire.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2lo1actl"/><path class="utw1vrodv"/><path class="y016e8ire"/>`,
		"fallback": "streamline-pixel:health-drug-medicine-water",
	});
}

export default Component;
