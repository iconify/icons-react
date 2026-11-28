import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynezi9bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynezi9bsl"/>`,
		"fallback": "noviair-light:calendar-refresh",
	});
}

export default Component;
