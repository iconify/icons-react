import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygy8l1bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygy8l1bet"/>`,
		"fallback": "tabler:bookmark-share",
	});
}

export default Component;
