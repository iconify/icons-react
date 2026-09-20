import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvss-gzwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvss-gzwu"/>`,
		"fallback": "mdi:chevron-triple-right",
	});
}

export default Component;
