import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci3t7cxvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci3t7cxvr"/>`,
		"fallback": "coolicons:arrow-down-up-round",
	});
}

export default Component;
