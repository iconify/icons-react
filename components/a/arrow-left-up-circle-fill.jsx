import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uod0nwcbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uod0nwcbr"/>`,
		"fallback": "mingcute:arrow-left-up-circle-fill",
	});
}

export default Component;
