import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp66c-b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp66c-b3z"/>`,
		"fallback": "lets-icons:arrow-alt-lright-alt",
	});
}

export default Component;
