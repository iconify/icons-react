import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxa4qxbcc.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxa4qxbcc"/>`,
		"fallback": "whh:exitalt",
	});
}

export default Component;
