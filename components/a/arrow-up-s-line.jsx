import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmkm7dbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmkm7dbwl"/>`,
		"fallback": "ri:arrow-up-s-line",
	});
}

export default Component;
