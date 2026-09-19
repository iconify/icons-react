import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxboa__7l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxboa__7l"/>`,
		"fallback": "fa7-regular:grin-wink",
	});
}

export default Component;
