import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n047vkb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n047vkb_s"/>`,
		"fallback": "ri:flag-off-line",
	});
}

export default Component;
