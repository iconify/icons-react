import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfnwd7b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfnwd7b7s"/>`,
		"fallback": "hugeicons:arrow-down10",
	});
}

export default Component;
