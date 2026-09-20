import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czc233s8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czc233s8m"/>`,
		"fallback": "tabler:infinity-off",
	});
}

export default Component;
