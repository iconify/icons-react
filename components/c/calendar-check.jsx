import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfc4wub2q.css';
import '../../css/r/r2ojm4wqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfc4wub2q"/><path class="r2ojm4wqq"/>`,
		"fallback": "bx:calendar-check",
	});
}

export default Component;
