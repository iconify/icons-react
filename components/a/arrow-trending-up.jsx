import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayhd7rbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayhd7rbvx"/>`,
		"fallback": "heroicons:arrow-trending-up",
	});
}

export default Component;
