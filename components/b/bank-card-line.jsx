import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltns5k4cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltns5k4cl"/>`,
		"fallback": "ri:bank-card-line",
	});
}

export default Component;
