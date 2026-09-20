import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er9fuob6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er9fuob6r"/>`,
		"fallback": "uil:comment-verify",
	});
}

export default Component;
