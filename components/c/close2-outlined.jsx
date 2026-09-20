import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek-30ob9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek-30ob9y"/>`,
		"fallback": "weui:close2-outlined",
	});
}

export default Component;
