import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uht88ogek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uht88ogek"/>`,
		"fallback": "keyline-icons:calendar-off-sharp",
	});
}

export default Component;
