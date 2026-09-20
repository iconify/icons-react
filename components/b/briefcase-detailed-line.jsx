import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcqo08b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcqo08b7c"/>`,
		"fallback": "si:briefcase-detailed-line",
	});
}

export default Component;
