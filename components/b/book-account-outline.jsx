import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyudxrb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyudxrb2w"/>`,
		"fallback": "mdi:book-account-outline",
	});
}

export default Component;
