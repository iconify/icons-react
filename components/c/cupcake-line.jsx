import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prb5lc1je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prb5lc1je"/>`,
		"fallback": "mingcute:cupcake-line",
	});
}

export default Component;
