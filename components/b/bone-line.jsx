import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu7pm8byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu7pm8byq"/>`,
		"fallback": "mingcute:bone-line",
	});
}

export default Component;
