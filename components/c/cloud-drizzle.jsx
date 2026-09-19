import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl74d_b9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl74d_b9a"/>`,
		"fallback": "circum:cloud-drizzle",
	});
}

export default Component;
