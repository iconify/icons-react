import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux6_y-bdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux6_y-bdg"/>`,
		"fallback": "heroicons:arrow-down",
	});
}

export default Component;
