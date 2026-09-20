import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adyc_d18v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adyc_d18v"/>`,
		"fallback": "mdi:gate-not",
	});
}

export default Component;
