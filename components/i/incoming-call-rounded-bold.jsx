import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4_4mjb9l.css';
import '../../css/u/u3-0qjcak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4_4mjb9l"/><path class="u3-0qjcak"/>`,
		"fallback": "solar:incoming-call-rounded-bold",
	});
}

export default Component;
