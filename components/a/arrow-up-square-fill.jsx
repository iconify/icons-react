import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk8hfnr0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk8hfnr0p"/>`,
		"fallback": "mage:arrow-up-square-fill",
	});
}

export default Component;
