import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb1bm54nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb1bm54nb"/>`,
		"fallback": "iconaut:award-solid",
	});
}

export default Component;
