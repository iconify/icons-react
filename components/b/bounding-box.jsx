import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt6330zrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt6330zrw"/>`,
		"fallback": "mynaui:bounding-box",
	});
}

export default Component;
