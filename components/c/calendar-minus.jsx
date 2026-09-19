import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7u3bta8y.css';
import '../../css/d/dfc4wub2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7u3bta8y"/><path class="dfc4wub2q"/>`,
		"fallback": "bx:calendar-minus",
	});
}

export default Component;
