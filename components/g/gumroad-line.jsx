import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pytlbv_yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pytlbv_yi"/>`,
		"fallback": "mingcute:gumroad-line",
	});
}

export default Component;
