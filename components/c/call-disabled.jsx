import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yju4lmbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yju4lmbft"/>`,
		"fallback": "hugeicons:call-disabled",
	});
}

export default Component;
