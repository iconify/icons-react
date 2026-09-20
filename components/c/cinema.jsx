import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w756wxpsi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w756wxpsi"/>`,
		"fallback": "maki:cinema",
	});
}

export default Component;
