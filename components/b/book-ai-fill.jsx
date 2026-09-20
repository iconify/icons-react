import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqj44p9dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqj44p9dq"/>`,
		"fallback": "ri:book-ai-fill",
	});
}

export default Component;
