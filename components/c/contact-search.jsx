import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn7xp_b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn7xp_b-q"/>`,
		"fallback": "noviair-light:contact-search",
	});
}

export default Component;
