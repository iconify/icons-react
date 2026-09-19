import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy9emkllg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy9emkllg"/>`,
		"fallback": "fa-solid:calendar-day",
	});
}

export default Component;
