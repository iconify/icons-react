import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csyj8wbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csyj8wbif"/>`,
		"fallback": "weui:email-outlined",
	});
}

export default Component;
