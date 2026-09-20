import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm3ffwfic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm3ffwfic"/>`,
		"fallback": "prime:arrow-up-right",
	});
}

export default Component;
