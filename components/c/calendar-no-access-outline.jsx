import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2f7d8bkl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2f7d8bkl"/>`,
		"fallback": "teenyicons:calendar-no-access-outline",
	});
}

export default Component;
