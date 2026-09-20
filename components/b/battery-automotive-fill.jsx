import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt2ubuxgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt2ubuxgx"/>`,
		"fallback": "mingcute:battery-automotive-fill",
	});
}

export default Component;
