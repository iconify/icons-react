import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruo8un5iy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruo8un5iy"/>`,
		"fallback": "mingcute:circle-chevron-up-line",
	});
}

export default Component;
