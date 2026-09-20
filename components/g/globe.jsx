import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u41rktw1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u41rktw1d"/>`,
		"fallback": "uil:globe",
	});
}

export default Component;
