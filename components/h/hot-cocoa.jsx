import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x97mdxb8y.css';
import '../../css/x/x364ycbkd.css';
import '../../css/j/jh_igqb8n.css';
import '../../css/u/ux8c5fbvb.css';
import '../../css/d/db8f19blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow x97mdxb8y"/><path class="wm-shadow x364ycbkd"/><path class="jh_igqb8n"/><path class="ux8c5fbvb"/><path class="db8f19blf wm-s"/></g>`,
		"fallback": "withicons-brutal:hot-cocoa",
	});
}

export default Component;
