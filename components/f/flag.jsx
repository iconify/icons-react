import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9jc0ib3q.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9jc0ib3q"/>`,
		"fallback": "iwwa:flag",
	});
}

export default Component;
