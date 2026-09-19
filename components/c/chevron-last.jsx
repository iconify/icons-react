import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcz4umbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcz4umbpm"/>`,
		"fallback": "hugeicons:chevron-last",
	});
}

export default Component;
