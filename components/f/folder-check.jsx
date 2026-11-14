import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad9e7wz3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad9e7wz3g"/>`,
		"fallback": "hugeicons:folder-check",
	});
}

export default Component;
