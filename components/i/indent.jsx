import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uddg1p2yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uddg1p2yu"/>`,
		"fallback": "sidekickicons:indent",
	});
}

export default Component;
