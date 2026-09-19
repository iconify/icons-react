import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miy_awb1i.css';

const viewBox = {"width":616,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miy_awb1i"/>`,
		"fallback": "fa6-brands:cloudversify",
	});
}

export default Component;
