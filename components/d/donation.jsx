import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg0gy_r-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg0gy_r-r"/>`,
		"fallback": "mdi:donation",
	});
}

export default Component;
