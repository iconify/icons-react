import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znt4_dbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znt4_dbjz"/>`,
		"fallback": "mdi:biscuit-lock-outline",
	});
}

export default Component;
