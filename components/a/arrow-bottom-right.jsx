import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk65jhv8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk65jhv8v"/>`,
		"fallback": "gg:arrow-bottom-right",
	});
}

export default Component;
