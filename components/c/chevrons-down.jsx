import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pko9-9czb.css';
import '../../css/s/s486fzbfn.css';
import '../../css/x/xvwslsivt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pko9-9czb wm-shadow"/><path class="s486fzbfn wm-shadow"/><path class="xvwslsivt"/></g>`,
		"fallback": "withicons-brutal:chevrons-down",
	});
}

export default Component;
