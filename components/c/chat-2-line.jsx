import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjec12bdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjec12bdc"/>`,
		"fallback": "majesticons:chat-2-line",
	});
}

export default Component;
