import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnb1mxbou.css';
import '../../css/q/qxw4ulbkx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnb1mxbou"/><path clip-rule="evenodd" class="qxw4ulbkx"/>`,
		"fallback": "qlementine-icons:certified-16",
	});
}

export default Component;
