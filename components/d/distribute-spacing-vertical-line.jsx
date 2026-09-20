import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvb3wvk0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvb3wvk0b"/>`,
		"fallback": "mingcute:distribute-spacing-vertical-line",
	});
}

export default Component;
