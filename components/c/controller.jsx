import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5140_bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5140_bxz"/>`,
		"fallback": "mdi:controller",
	});
}

export default Component;
