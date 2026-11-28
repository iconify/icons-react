import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_s4wsb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_s4wsb7p primary"/>`,
		"fallback": "iconaut:cloud-off-duotone",
	});
}

export default Component;
