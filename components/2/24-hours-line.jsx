import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrqbcgw4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrqbcgw4u"/>`,
		"fallback": "ri:24-hours-line",
	});
}

export default Component;
