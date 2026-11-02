import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu8sjzbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu8sjzbvl"/>`,
		"fallback": "mingcute:beer-off-fill",
	});
}

export default Component;
