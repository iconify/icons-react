import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of1h860am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of1h860am"/>`,
		"fallback": "mingcute:battery-3-line",
	});
}

export default Component;
