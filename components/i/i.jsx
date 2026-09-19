import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phux6hbyq.css';

const viewBox = {"width":82,"height":690};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phux6hbyq"/>`,
		"fallback": "ls:i",
	});
}

export default Component;
