import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpsy1qb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpsy1qb7k"/>`,
		"fallback": "coolicons:dribbble-round",
	});
}

export default Component;
