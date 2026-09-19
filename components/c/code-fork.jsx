import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqq_5joia.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqq_5joia"/>`,
		"fallback": "fa7-solid:code-fork",
	});
}

export default Component;
