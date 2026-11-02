import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt2w29brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt2w29brp"/>`,
		"fallback": "mingcute:eye-close-fill",
	});
}

export default Component;
