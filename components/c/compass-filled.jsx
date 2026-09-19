import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx1dvp6hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx1dvp6hk"/>`,
		"fallback": "boxicons:compass-filled",
	});
}

export default Component;
