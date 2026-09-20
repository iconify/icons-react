import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyfun4nwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyfun4nwv"/>`,
		"fallback": "ri:equal-line",
	});
}

export default Component;
