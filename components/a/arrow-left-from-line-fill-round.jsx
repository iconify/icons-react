import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swav2ec8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swav2ec8k"/>`,
		"fallback": "coolicons:arrow-left-from-line-fill-round",
	});
}

export default Component;
