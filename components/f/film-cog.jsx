import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5mm9kbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5mm9kbgh"/>`,
		"fallback": "mdi:film-cog",
	});
}

export default Component;
