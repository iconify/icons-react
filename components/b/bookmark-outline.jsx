import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxlp5qvgf.css';
import '../../css/o/ojf0j38zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxlp5qvgf"/><path clip-rule="evenodd" class="ojf0j38zt"/>`,
		"fallback": "solar:bookmark-outline",
	});
}

export default Component;
