import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozfwejbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozfwejbht"/>`,
		"fallback": "hugeicons:download-04",
	});
}

export default Component;
