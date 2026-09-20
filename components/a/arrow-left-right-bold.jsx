import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhs2ozbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhs2ozbod"/>`,
		"fallback": "mdi:arrow-left-right-bold",
	});
}

export default Component;
