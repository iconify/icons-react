import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stse3cnyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stse3cnyf"/>`,
		"fallback": "mingcute:arrow-to-up-fill",
	});
}

export default Component;
