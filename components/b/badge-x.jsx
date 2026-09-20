import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii08xxbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii08xxbwm"/>`,
		"fallback": "vadivam:badge-x",
	});
}

export default Component;
