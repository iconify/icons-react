import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnywrch1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnywrch1p"/>`,
		"fallback": "boxicons:feather-alt-filled",
	});
}

export default Component;
