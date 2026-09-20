import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmcb4ub3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmcb4ub3e"/>`,
		"fallback": "uil:comment-image",
	});
}

export default Component;
