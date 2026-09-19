import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnzmmbozw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnzmmbozw"/>`,
		"fallback": "ep:cherry",
	});
}

export default Component;
