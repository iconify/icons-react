import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s17-xn6bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s17-xn6bb"/>`,
		"fallback": "akar-icons:history",
	});
}

export default Component;
