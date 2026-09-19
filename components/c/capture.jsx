import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytl8wsbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytl8wsbfs"/>`,
		"fallback": "boxicons:capture",
	});
}

export default Component;
