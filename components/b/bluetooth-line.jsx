import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz7llccqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz7llccqe"/>`,
		"fallback": "majesticons:bluetooth-line",
	});
}

export default Component;
