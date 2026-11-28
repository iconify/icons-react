import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex1ms6bkq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex1ms6bkq"/>`,
		"fallback": "pullo:forward-10",
	});
}

export default Component;
