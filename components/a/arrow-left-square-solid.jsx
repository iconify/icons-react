import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp_2rq63l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp_2rq63l"/>`,
		"fallback": "iconaut:arrow-left-square-solid",
	});
}

export default Component;
