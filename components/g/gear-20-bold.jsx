import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz8vwp2ry.css';
import '../../css/y/y854psd3c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz8vwp2ry"/><path class="y854psd3c"/>`,
		"fallback": "energy-icons:gear-20-bold",
	});
}

export default Component;
