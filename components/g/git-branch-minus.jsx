import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixl5yb5fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixl5yb5fa"/>`,
		"fallback": "keyline-icons:git-branch-minus",
	});
}

export default Component;
