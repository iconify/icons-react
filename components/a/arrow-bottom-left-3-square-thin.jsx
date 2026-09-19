import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tubbq5dkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tubbq5dkf"/>`,
		"fallback": "iconamoon:arrow-bottom-left-3-square-thin",
	});
}

export default Component;
