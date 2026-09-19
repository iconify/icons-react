import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f54c3mm_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f54c3mm_n"/>`,
		"fallback": "griddy-icons:graduation-cap-alt",
	});
}

export default Component;
