import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n65np6ypu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n65np6ypu"/>`,
		"fallback": "coolicons:hard-hat-round",
	});
}

export default Component;
