import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rram23-dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rram23-dq"/>`,
		"fallback": "mdi:briefcase-plus",
	});
}

export default Component;
