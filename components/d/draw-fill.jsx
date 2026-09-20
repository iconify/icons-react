import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7y6ar4dl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7y6ar4dl"/>`,
		"fallback": "ri:draw-fill",
	});
}

export default Component;
