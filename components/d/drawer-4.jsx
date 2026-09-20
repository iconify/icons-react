import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcq8hnbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcq8hnbdl"/>`,
		"fallback": "streamline-cyber:drawer-4",
	});
}

export default Component;
