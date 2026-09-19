import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj3e5jc6q.css';
import '../../css/c/ckm92z5cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj3e5jc6q"/><path class="ckm92z5cf"/>`,
		"fallback": "basil:apple-solid",
	});
}

export default Component;
