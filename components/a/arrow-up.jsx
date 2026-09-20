import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enc6bgl8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enc6bgl8c"/>`,
		"fallback": "typcn:arrow-up",
	});
}

export default Component;
