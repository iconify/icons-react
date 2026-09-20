import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k672u9bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k672u9bsy"/>`,
		"fallback": "mdi:format-font",
	});
}

export default Component;
