import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbho9sbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbho9sbcy"/>`,
		"fallback": "mingcute:add-square-line",
	});
}

export default Component;
