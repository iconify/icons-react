import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjd33qpzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjd33qpzz"/>`,
		"fallback": "bxs:chevron-left-square",
	});
}

export default Component;
