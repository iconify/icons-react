import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0b_s6bss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0b_s6bss"/>`,
		"fallback": "boxicons:approximate",
	});
}

export default Component;
