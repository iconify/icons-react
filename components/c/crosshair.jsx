import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d885-7b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d885-7b3e"/>`,
		"fallback": "vadivam:crosshair",
	});
}

export default Component;
