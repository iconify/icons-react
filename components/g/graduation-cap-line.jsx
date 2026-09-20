import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqlr_ebwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqlr_ebwu"/>`,
		"fallback": "ri:graduation-cap-line",
	});
}

export default Component;
