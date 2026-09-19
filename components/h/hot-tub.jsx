import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6e-d3bum.css';
import '../../css/y/ykod1zf1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6e-d3bum"/><path class="ykod1zf1s"/>`,
		"fallback": "boxicons:hot-tub",
	});
}

export default Component;
