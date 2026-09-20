import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbof4ko8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbof4ko8i"/>`,
		"fallback": "mdi:database-plus",
	});
}

export default Component;
