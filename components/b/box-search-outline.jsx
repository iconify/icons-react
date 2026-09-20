import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv3t5fpaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv3t5fpaa"/>`,
		"fallback": "mdi:box-search-outline",
	});
}

export default Component;
