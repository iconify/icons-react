import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdh68jixy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdh68jixy"/>`,
		"fallback": "si:dashboard-customize-line",
	});
}

export default Component;
