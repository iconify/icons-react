import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao-tyjbir.css';
import '../../css/r/rtr7zsbdu.css';
import '../../css/d/don67qb2k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao-tyjbir"/><path class="rtr7zsbdu"/><path class="don67qb2k"/>`,
		"fallback": "energy-icons:angle-grinder-20",
	});
}

export default Component;
