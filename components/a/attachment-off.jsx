import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwh0ln4yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwh0ln4yx"/>`,
		"fallback": "hugeicons:attachment-off",
	});
}

export default Component;
