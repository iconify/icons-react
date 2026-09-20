import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylj5lsb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylj5lsb_e"/>`,
		"fallback": "tabler:fence-off",
	});
}

export default Component;
