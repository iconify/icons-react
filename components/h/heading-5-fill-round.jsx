import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6j9kxb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6j9kxb1y"/>`,
		"fallback": "coolicons:heading-5-fill-round",
	});
}

export default Component;
