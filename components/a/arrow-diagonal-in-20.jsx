import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9kqie5ws.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9kqie5ws"/>`,
		"fallback": "garden:arrow-diagonal-in-20",
	});
}

export default Component;
