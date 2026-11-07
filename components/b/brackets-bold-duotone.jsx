import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piokwuzpw.css';
import '../../css/n/npg9cub3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piokwuzpw"/><path class="npg9cub3q"/>`,
		"fallback": "solar:brackets-bold-duotone",
	});
}

export default Component;
