import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1uiy8bns.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1uiy8bns"/>`,
		"fallback": "ep:d-caret",
	});
}

export default Component;
