import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi-2hybse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi-2hybse"/>`,
		"fallback": "mdi:folder-swap",
	});
}

export default Component;
