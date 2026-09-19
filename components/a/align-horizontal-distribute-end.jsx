import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy_2mhbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy_2mhbhu"/>`,
		"fallback": "hugeicons:align-horizontal-distribute-end",
	});
}

export default Component;
