import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi_6xzbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi_6xzbaf"/>`,
		"fallback": "hugeicons:funnel",
	});
}

export default Component;
