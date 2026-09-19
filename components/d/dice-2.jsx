import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jds0_5bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jds0_5bwy"/>`,
		"fallback": "bxs:dice-2",
	});
}

export default Component;
