import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsxaeflza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsxaeflza"/>`,
		"fallback": "mingcute:calendar-add-fill",
	});
}

export default Component;
