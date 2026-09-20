import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea9rtrb4q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea9rtrb4q"/>`,
		"fallback": "streamline:euro",
	});
}

export default Component;
