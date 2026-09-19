import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhj13ubxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhj13ubxi"/>`,
		"fallback": "fa-solid:bath",
	});
}

export default Component;
