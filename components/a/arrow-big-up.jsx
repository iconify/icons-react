import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dep2gs26u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dep2gs26u"/>`,
		"fallback": "noviair:arrow-big-up",
	});
}

export default Component;
