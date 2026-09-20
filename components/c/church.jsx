import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws1o19b9q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws1o19b9q"/>`,
		"fallback": "picon:church",
	});
}

export default Component;
