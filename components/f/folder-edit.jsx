import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_s6lc4vx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_s6lc4vx"/>`,
		"fallback": "ci:folder-edit",
	});
}

export default Component;
