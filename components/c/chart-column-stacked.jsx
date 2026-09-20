import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzh6r_7vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzh6r_7vk"/>`,
		"fallback": "keyline-icons:chart-column-stacked",
	});
}

export default Component;
