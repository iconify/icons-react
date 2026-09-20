import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-r-f4b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-r-f4b-i"/>`,
		"fallback": "streamline-sharp:credit-card-disable",
	});
}

export default Component;
