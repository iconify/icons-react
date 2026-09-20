import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2uxusbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2uxusbwy"/>`,
		"fallback": "mynaui:home-minus-solid",
	});
}

export default Component;
