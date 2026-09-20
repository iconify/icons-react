import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om2x0ob5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om2x0ob5c"/>`,
		"fallback": "mynaui:briefcase-medical",
	});
}

export default Component;
