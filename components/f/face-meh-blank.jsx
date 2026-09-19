import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkq1b1b5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkq1b1b5z"/>`,
		"fallback": "fa6-solid:face-meh-blank",
	});
}

export default Component;
