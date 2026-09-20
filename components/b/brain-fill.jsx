import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zss6yfbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zss6yfbwc"/>`,
		"fallback": "keyline-icons:brain-fill",
	});
}

export default Component;
