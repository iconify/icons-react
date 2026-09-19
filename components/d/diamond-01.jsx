import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sknu5wjce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sknu5wjce"/>`,
		"fallback": "hugeicons:diamond-01",
	});
}

export default Component;
