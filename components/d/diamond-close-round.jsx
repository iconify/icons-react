import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxty1nqgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxty1nqgn"/>`,
		"fallback": "coolicons:diamond-close-round",
	});
}

export default Component;
