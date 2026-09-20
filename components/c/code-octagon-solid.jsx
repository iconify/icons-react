import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nakui0b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nakui0b-e"/>`,
		"fallback": "mynaui:code-octagon-solid",
	});
}

export default Component;
