import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fski4lbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fski4lbey"/>`,
		"fallback": "iconamoon:component-bold",
	});
}

export default Component;
