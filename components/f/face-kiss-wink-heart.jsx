import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w72tb1b9p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w72tb1b9p"/>`,
		"fallback": "fa7-regular:face-kiss-wink-heart",
	});
}

export default Component;
