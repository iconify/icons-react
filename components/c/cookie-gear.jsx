import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlugd1bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlugd1bkx"/>`,
		"fallback": "noviair:cookie-gear",
	});
}

export default Component;
