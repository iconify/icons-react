import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj-cb-bsi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj-cb-bsi"/>`,
		"fallback": "pullo:helicopter-light",
	});
}

export default Component;
