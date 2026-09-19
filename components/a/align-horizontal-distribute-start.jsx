import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwb_-q86x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwb_-q86x"/>`,
		"fallback": "hugeicons:align-horizontal-distribute-start",
	});
}

export default Component;
