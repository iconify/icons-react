import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn55p_bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn55p_bor"/>`,
		"fallback": "ri:book-2-line",
	});
}

export default Component;
