import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffet1q63i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffet1q63i"/>`,
		"fallback": "mingcute:git-merge-conflict-line",
	});
}

export default Component;
