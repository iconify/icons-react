import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cizcas08r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cizcas08r"/>`,
		"fallback": "si:ai-fact-line",
	});
}

export default Component;
