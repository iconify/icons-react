import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhxdvy5ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhxdvy5ek"/>`,
		"fallback": "coolicons:arrow-down-large-duotone-round",
	});
}

export default Component;
