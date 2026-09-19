import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnydghbew.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnydghbew"/>`,
		"fallback": "topcoat:github",
	});
}

export default Component;
