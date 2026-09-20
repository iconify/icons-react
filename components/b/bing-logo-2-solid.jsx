import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km5mez-1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km5mez-1o"/>`,
		"fallback": "streamline-logos:bing-logo-2-solid",
	});
}

export default Component;
