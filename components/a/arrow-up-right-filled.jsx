import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgfrq7b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgfrq7b3k"/>`,
		"fallback": "boxicons:arrow-up-right-filled",
	});
}

export default Component;
