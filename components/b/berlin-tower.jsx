import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxlx8t3pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxlx8t3pw"/>`,
		"fallback": "hugeicons:berlin-tower",
	});
}

export default Component;
