import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q28ow0buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q28ow0buv"/>`,
		"fallback": "mingcute:currency-pound-2-fill",
	});
}

export default Component;
