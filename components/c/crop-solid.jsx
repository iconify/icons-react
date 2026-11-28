import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brk9uu4sq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brk9uu4sq"/>`,
		"fallback": "iconaut:crop-solid",
	});
}

export default Component;
