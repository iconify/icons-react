import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ranjxs-at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ranjxs-at"/>`,
		"fallback": "keyline-icons:arrow-up-right-dashed-panel",
	});
}

export default Component;
