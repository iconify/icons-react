import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wca9nwbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wca9nwbvs"/>`,
		"fallback": "bx:bx-lira",
	});
}

export default Component;
