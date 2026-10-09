import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h672n2bmz.css';
import '../../css/y/ysryh6dqp.css';
import '../../css/a/ax9-5db1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h672n2bmz"/><path class="ysryh6dqp"/><path class="ax9-5db1r"/>`,
		"fallback": "energy-icons:elderly-20-bold",
	});
}

export default Component;
