import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql5xq868z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql5xq868z"/>`,
		"fallback": "ion:calendar-clear-sharp",
	});
}

export default Component;
