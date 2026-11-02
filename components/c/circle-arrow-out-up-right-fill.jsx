import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caag8rbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caag8rbrz"/>`,
		"fallback": "mingcute:circle-arrow-out-up-right-fill",
	});
}

export default Component;
