import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0l9zdeaj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0l9zdeaj"/>`,
		"fallback": "lsicon:align-txt-both-outline",
	});
}

export default Component;
