import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq3fydbgx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq3fydbgx"/>`,
		"fallback": "pinhead:hook",
	});
}

export default Component;
