import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuuxaxb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuuxaxb1s"/>`,
		"fallback": "iconoir:bold",
	});
}

export default Component;
