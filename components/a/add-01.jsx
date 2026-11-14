import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytb8_xbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytb8_xbkj"/>`,
		"fallback": "hugeicons:add-01",
	});
}

export default Component;
