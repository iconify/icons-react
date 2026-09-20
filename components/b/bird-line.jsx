import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcm2mfsay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcm2mfsay"/>`,
		"fallback": "mingcute:bird-line",
	});
}

export default Component;
