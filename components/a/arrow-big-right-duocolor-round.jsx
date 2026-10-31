import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knu0x1b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knu0x1b-y"/>`,
		"fallback": "coolicons:arrow-big-right-duocolor-round",
	});
}

export default Component;
