import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxfzo_blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxfzo_blj"/>`,
		"fallback": "iconaut:case-lower-solid",
	});
}

export default Component;
