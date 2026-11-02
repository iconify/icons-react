import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg90zxbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg90zxbcz"/>`,
		"fallback": "mingcute:arrow-down-wide-narrow-line",
	});
}

export default Component;
