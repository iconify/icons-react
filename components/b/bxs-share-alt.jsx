import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q90a30i4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q90a30i4c"/>`,
		"fallback": "bx:bxs-share-alt",
	});
}

export default Component;
