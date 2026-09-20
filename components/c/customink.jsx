import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i20v4--ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i20v4--ys"/>`,
		"fallback": "simple-icons:customink",
	});
}

export default Component;
