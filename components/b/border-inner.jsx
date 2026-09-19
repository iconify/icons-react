import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xybm8_bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xybm8_bsu"/>`,
		"fallback": "hugeicons:border-inner",
	});
}

export default Component;
