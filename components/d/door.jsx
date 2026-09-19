import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d57uaiwla.css';
import '../../css/w/wtnptnb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d57uaiwla"/><path class="wtnptnb3h"/>`,
		"fallback": "boxicons:door",
	});
}

export default Component;
