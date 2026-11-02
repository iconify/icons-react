import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9uckj--x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9uckj--x"/>`,
		"fallback": "mingcute:compass-3-line",
	});
}

export default Component;
