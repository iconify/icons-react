import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apxkmccpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apxkmccpi"/>`,
		"fallback": "tabler:arrow-rotary-last-right",
	});
}

export default Component;
