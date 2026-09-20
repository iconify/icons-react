import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7b5412_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7b5412_q"/>`,
		"fallback": "simple-icons:gitlab",
	});
}

export default Component;
