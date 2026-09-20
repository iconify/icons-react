import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djuy7yu_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djuy7yu_e"/>`,
		"fallback": "simple-icons:hive-blockchain",
	});
}

export default Component;
