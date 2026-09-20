import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9vkuib2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9vkuib2i"/>`,
		"fallback": "ri:dv-fill",
	});
}

export default Component;
