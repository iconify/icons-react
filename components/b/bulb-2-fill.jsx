import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bur-p6bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bur-p6bwp"/>`,
		"fallback": "mingcute:bulb-2-fill",
	});
}

export default Component;
