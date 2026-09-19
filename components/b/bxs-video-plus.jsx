import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp1ye-b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp1ye-b6y"/>`,
		"fallback": "bx:bxs-video-plus",
	});
}

export default Component;
