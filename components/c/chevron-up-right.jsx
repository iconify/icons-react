import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp03_1bum.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp03_1bum"/>`,
		"fallback": "jam:chevron-up-right",
	});
}

export default Component;
