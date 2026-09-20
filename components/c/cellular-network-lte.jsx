import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy4xbiqqa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy4xbiqqa"/>`,
		"fallback": "streamline-color:cellular-network-lte",
	});
}

export default Component;
