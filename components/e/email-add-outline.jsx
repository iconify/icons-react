import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5ll95seg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5ll95seg"/>`,
		"fallback": "mdi:email-add-outline",
	});
}

export default Component;
