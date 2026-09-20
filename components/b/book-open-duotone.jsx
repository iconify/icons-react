import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb0ez_bdu.css';
import '../../css/j/j4olmxbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb0ez_bdu"/><path class="j4olmxbwg"/>`,
		"fallback": "lets-icons:book-open-duotone",
	});
}

export default Component;
