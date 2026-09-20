import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acw94x52i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acw94x52i"/>`,
		"fallback": "mingcute:brackets-angle-line",
	});
}

export default Component;
