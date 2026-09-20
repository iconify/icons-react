import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty8-mztlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty8-mztlv"/>`,
		"fallback": "mingcute:arrow-left-up-circle-fill",
	});
}

export default Component;
