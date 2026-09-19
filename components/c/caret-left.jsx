import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk1-7274n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk1-7274n"/>`,
		"fallback": "fa7-solid:caret-left",
	});
}

export default Component;
