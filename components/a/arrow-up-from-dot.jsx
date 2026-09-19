import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqzu234pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqzu234pt"/>`,
		"fallback": "hugeicons:arrow-up-from-dot",
	});
}

export default Component;
