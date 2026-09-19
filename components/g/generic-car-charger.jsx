import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm-x0nboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm-x0nboc"/>`,
		"fallback": "cbi:generic-car-charger",
	});
}

export default Component;
