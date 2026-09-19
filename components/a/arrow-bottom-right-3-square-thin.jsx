import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdlyf0bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdlyf0bug"/>`,
		"fallback": "iconamoon:arrow-bottom-right-3-square-thin",
	});
}

export default Component;
