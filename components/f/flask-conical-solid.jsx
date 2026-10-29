import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrr6zx6_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrr6zx6_q"/>`,
		"fallback": "withicons:flask-conical-solid",
	});
}

export default Component;
