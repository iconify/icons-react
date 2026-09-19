import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akbj3-3cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akbj3-3cl"/>`,
		"fallback": "bxs:chevron-left",
	});
}

export default Component;
