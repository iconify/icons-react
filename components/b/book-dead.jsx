import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de-t7vb2b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de-t7vb2b"/>`,
		"fallback": "fa7-solid:book-dead",
	});
}

export default Component;
