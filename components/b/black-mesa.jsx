import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j74jll1db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j74jll1db"/>`,
		"fallback": "mdi:black-mesa",
	});
}

export default Component;
