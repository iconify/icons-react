import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhm7ikbge.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhm7ikbge"/>`,
		"fallback": "fa-solid:function",
	});
}

export default Component;
