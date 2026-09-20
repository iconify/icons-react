import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gay3w-bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gay3w-bst"/>`,
		"fallback": "pixelarticons:chevron-right",
	});
}

export default Component;
