import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qawia2ile.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qawia2ile"/>`,
		"fallback": "mdi:box-plus",
	});
}

export default Component;
