import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tltqigj2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tltqigj2e"/>`,
		"fallback": "mingcute:fullscreen-exit-2-line",
	});
}

export default Component;
