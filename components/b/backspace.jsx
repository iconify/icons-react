import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlr6cy_uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlr6cy_uq"/>`,
		"fallback": "heroicons:backspace",
	});
}

export default Component;
