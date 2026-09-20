import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvl6ymb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvl6ymb-b"/>`,
		"fallback": "mdi:content-save-check",
	});
}

export default Component;
