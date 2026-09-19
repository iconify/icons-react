import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2-b6yigu.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2-b6yigu"/>`,
		"fallback": "fa6-solid:heading",
	});
}

export default Component;
