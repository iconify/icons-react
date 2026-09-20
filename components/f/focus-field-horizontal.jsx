import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytz6a3bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytz6a3bly"/>`,
		"fallback": "mdi:focus-field-horizontal",
	});
}

export default Component;
