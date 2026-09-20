import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0h_t7ivf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0h_t7ivf"/>`,
		"fallback": "streamline-logos:etsy-logo-solid",
	});
}

export default Component;
