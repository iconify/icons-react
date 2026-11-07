import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjrrq5bwn.css';
import '../../css/j/j05r12o9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjrrq5bwn"/><path class="j05r12o9z"/>`,
		"fallback": "solar:incoming-call-bold-duotone",
	});
}

export default Component;
