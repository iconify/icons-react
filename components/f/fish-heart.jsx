import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4t9-eb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4t9-eb4o"/>`,
		"fallback": "noviair:fish-heart",
	});
}

export default Component;
