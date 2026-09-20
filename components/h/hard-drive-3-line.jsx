import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oud9o5bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oud9o5bru"/>`,
		"fallback": "ri:hard-drive-3-line",
	});
}

export default Component;
