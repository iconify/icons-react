import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l28ij0y1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l28ij0y1r"/>`,
		"fallback": "mdi:axis-lock",
	});
}

export default Component;
