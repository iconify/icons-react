import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuri9zn2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuri9zn2u"/>`,
		"fallback": "streamline-ultimate:delete-bold",
	});
}

export default Component;
