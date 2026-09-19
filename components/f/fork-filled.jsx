import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fso1x3bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fso1x3bbq"/>`,
		"fallback": "boxicons:fork-filled",
	});
}

export default Component;
