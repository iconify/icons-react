import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu-9-sbgu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu-9-sbgu"/>`,
		"fallback": "dashicons:calculator",
	});
}

export default Component;
