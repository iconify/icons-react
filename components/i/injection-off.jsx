import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_d0fh6vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_d0fh6vs"/>`,
		"fallback": "mdi:injection-off",
	});
}

export default Component;
