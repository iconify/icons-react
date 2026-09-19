import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln1jp2beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln1jp2beg"/>`,
		"fallback": "bxs:binoculars",
	});
}

export default Component;
