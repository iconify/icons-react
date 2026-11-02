import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fchvx2m-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fchvx2m-v"/>`,
		"fallback": "mingcute:clock-6-fill",
	});
}

export default Component;
