import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-zxidb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-zxidb1l"/>`,
		"fallback": "iconamoon:arrow-left-1-thin",
	});
}

export default Component;
