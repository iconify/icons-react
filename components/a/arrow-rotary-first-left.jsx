import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0sbp1bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0sbp1bay"/>`,
		"fallback": "tabler:arrow-rotary-first-left",
	});
}

export default Component;
