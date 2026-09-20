import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezso3g27z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezso3g27z"/>`,
		"fallback": "pixel:cloud-rain",
	});
}

export default Component;
