import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieveh1t1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieveh1t1m"/>`,
		"fallback": "gridicons:domains",
	});
}

export default Component;
