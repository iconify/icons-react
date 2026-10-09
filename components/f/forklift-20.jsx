import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmeg1tr8x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmeg1tr8x"/>`,
		"fallback": "energy-icons:forklift-20",
	});
}

export default Component;
