import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nigbi5b9s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nigbi5b9s"/>`,
		"fallback": "ep:arrow-down",
	});
}

export default Component;
