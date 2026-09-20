import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilkm3-gfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilkm3-gfo"/>`,
		"fallback": "mynaui:arrow-long-up-right",
	});
}

export default Component;
