import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_gf5r_uo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_gf5r_uo"/>`,
		"fallback": "selfhst:apc",
	});
}

export default Component;
