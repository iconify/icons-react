import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnm38wbpi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnm38wbpi"/>`,
		"fallback": "pullo:bookmark-simple-check-light",
	});
}

export default Component;
