import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi345vbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi345vbtq"/>`,
		"fallback": "mingcute:border-inner-line",
	});
}

export default Component;
