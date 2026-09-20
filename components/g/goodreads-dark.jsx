import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu1_e0pru.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu1_e0pru"/>`,
		"fallback": "selfhst:goodreads-dark",
	});
}

export default Component;
