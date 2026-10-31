import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s-47tuq-b.css';
import '../../css/p/pc0h08v4d.css';
import '../../css/x/x3c8exbij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="s-47tuq-b wm-shadow"/><path class="pc0h08v4d wm-shadow"/><path class="x3c8exbij"/></g>`,
		"fallback": "withicons-brutal:a-large-small",
	});
}

export default Component;
