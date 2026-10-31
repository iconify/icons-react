import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd5924hks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd5924hks"/>`,
		"fallback": "coolicons:circle-dashed-close-fill-round",
	});
}

export default Component;
