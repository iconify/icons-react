import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrruqac4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrruqac4o"/>`,
		"fallback": "simple-icons:codecrafters",
	});
}

export default Component;
