import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd3cd6ubq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd3cd6ubq"/>`,
		"fallback": "dashicons:arrow-right",
	});
}

export default Component;
