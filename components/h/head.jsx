import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqy2fdc8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqy2fdc8v"/>`,
		"fallback": "mdi:head",
	});
}

export default Component;
