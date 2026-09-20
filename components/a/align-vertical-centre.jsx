import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au420xd-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au420xd-e"/>`,
		"fallback": "mdi:align-vertical-centre",
	});
}

export default Component;
