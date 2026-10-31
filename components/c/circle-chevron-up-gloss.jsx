import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9t3z0jdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9t3z0jdt"/>`,
		"fallback": "withicons:circle-chevron-up-gloss",
	});
}

export default Component;
