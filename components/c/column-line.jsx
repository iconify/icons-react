import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqtmb4byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqtmb4byj"/>`,
		"fallback": "mingcute:column-line",
	});
}

export default Component;
