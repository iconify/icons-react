import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzvw8wbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzvw8wbje"/>`,
		"fallback": "ri:arrow-right-line",
	});
}

export default Component;
