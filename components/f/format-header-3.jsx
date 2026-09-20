import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgki61d2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgki61d2y"/>`,
		"fallback": "mdi:format-header-3",
	});
}

export default Component;
