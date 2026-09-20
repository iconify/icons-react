import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af3h010ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af3h010ma"/>`,
		"fallback": "mdi:diving-scuba-tank-multiple",
	});
}

export default Component;
