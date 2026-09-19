import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs2-cdbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs2-cdbrd"/>`,
		"fallback": "heroicons:bars-2",
	});
}

export default Component;
