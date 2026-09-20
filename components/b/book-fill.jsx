import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl9s-5ban.css';
import '../../css/l/lc9mj6b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl9s-5ban"/><path clip-rule="evenodd" class="lc9mj6b2y"/>`,
		"fallback": "si:book-fill",
	});
}

export default Component;
