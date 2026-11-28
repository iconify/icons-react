import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo1rnqugs.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo1rnqugs"/>`,
		"fallback": "pullo:bee-fill",
	});
}

export default Component;
