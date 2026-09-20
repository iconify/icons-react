import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lttya_ivm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lttya_ivm"/>`,
		"fallback": "mdi:comment-remove-outline",
	});
}

export default Component;
