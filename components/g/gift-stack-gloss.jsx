import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czkks7lgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czkks7lgd"/>`,
		"fallback": "withicons:gift-stack-gloss",
	});
}

export default Component;
