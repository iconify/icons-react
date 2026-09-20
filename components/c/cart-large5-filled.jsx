import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yafqz0oxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yafqz0oxq"/>`,
		"fallback": "reicon:cart-large5-filled",
	});
}

export default Component;
