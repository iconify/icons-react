import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2nvnvk-q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2nvnvk-q"/>`,
		"fallback": "teenyicons:calendar-x-outline",
	});
}

export default Component;
