import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r99neac-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r99neac-x"/>`,
		"fallback": "bxs:book-alt",
	});
}

export default Component;
