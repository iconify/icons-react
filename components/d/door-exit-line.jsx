import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaubn2bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaubn2bjf"/>`,
		"fallback": "majesticons:door-exit-line",
	});
}

export default Component;
