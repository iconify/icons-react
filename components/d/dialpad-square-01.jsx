import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afu0z20lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afu0z20lt"/>`,
		"fallback": "hugeicons:dialpad-square-01",
	});
}

export default Component;
