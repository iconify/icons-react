import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz2kdjbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz2kdjbhf"/>`,
		"fallback": "keyline-icons:arrow-down-fill",
	});
}

export default Component;
