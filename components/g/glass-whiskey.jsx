import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a70ga4nnm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a70ga4nnm"/>`,
		"fallback": "fa-solid:glass-whiskey",
	});
}

export default Component;
