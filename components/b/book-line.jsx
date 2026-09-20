import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xejf3lboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xejf3lboi"/>`,
		"fallback": "majesticons:book-line",
	});
}

export default Component;
