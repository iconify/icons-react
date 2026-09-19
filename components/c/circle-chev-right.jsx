import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi9qgerqe.css';
import '../../css/t/t7bnoab5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi9qgerqe"/><path class="t7bnoab5n"/>`,
		"fallback": "circum:circle-chev-right",
	});
}

export default Component;
