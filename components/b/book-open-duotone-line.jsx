import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt4g3v8ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt4g3v8ea"/>`,
		"fallback": "lets-icons:book-open-duotone-line",
	});
}

export default Component;
