import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fii_z8bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fii_z8bcd"/>`,
		"fallback": "iconamoon:enter-thin",
	});
}

export default Component;
