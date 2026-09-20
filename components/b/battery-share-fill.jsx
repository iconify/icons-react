import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii5qd0b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii5qd0b_j"/>`,
		"fallback": "ri:battery-share-fill",
	});
}

export default Component;
