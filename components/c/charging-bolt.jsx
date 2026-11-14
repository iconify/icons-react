import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijhq98bry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijhq98bry"/>`,
		"fallback": "evicons:charging-bolt",
	});
}

export default Component;
