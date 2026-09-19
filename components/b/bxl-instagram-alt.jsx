import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9tqfebse.css';
import '../../css/m/m7aw91b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9tqfebse"/><circle class="m7aw91b8q"/>`,
		"fallback": "bx:bxl-instagram-alt",
	});
}

export default Component;
