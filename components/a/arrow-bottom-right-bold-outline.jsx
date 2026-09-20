import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvxgn1bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvxgn1bwl"/>`,
		"fallback": "mdi:arrow-bottom-right-bold-outline",
	});
}

export default Component;
