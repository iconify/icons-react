import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klt794f4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klt794f4c primary"/>`,
		"fallback": "iconaut:arrow-down-from-line-duotone",
	});
}

export default Component;
