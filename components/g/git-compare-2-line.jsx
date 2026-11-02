import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txu3124of.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txu3124of"/>`,
		"fallback": "mingcute:git-compare-2-line",
	});
}

export default Component;
