import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5pk2n8fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5pk2n8fa"/>`,
		"fallback": "boxicons:certification",
	});
}

export default Component;
