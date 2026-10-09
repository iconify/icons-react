import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snm0mpkao.css';
import '../../css/r/rm_syy1jr.css';
import '../../css/r/rwupt7b_u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snm0mpkao"/><path class="rm_syy1jr"/><path class="rwupt7b_u"/>`,
		"fallback": "energy-icons:castle-20-bold",
	});
}

export default Component;
