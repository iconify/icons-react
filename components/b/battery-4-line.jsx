import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9ezq80-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9ezq80-d"/>`,
		"fallback": "mingcute:battery-4-line",
	});
}

export default Component;
