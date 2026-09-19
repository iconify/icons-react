import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4uzobcex.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4uzobcex"/>`,
		"fallback": "foundation:female-symbol",
	});
}

export default Component;
