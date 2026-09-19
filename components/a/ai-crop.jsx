import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xntikhq4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xntikhq4t"/>`,
		"fallback": "hugeicons:ai-crop",
	});
}

export default Component;
