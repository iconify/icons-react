import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aesn7b_0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aesn7b_0u"/>`,
		"fallback": "majesticons:data-plus-line",
	});
}

export default Component;
