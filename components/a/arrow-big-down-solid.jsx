import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgd4_bb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgd4_bb4r"/>`,
		"fallback": "iconaut:arrow-big-down-solid",
	});
}

export default Component;
