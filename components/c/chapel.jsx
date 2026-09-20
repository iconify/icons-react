import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6y7mcc8q.css';
import '../../css/l/lc0gopbkm.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6y7mcc8q"/><path class="lc0gopbkm"/>`,
		"fallback": "medical-icon:chapel",
	});
}

export default Component;
