import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbep0udnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbep0udnj"/>`,
		"fallback": "bx:bluetooth",
	});
}

export default Component;
