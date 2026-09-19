import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2swmfb7m.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2swmfb7m"/>`,
		"fallback": "fa-solid:calendar-week",
	});
}

export default Component;
