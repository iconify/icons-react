import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mak4hx3pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mak4hx3pt"/>`,
		"fallback": "mynaui:frame-solid",
	});
}

export default Component;
