import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8t1gyelg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8t1gyelg"/>`,
		"fallback": "mdi:database-arrow-down-outline",
	});
}

export default Component;
