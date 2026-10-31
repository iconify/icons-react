import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gnn5qpboc.css';
import '../../css/n/nqxm3wozy.css';
import '../../css/i/i2onpmbub.css';
import '../../css/u/u5ygvwb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gnn5qpboc wm-shadow"/><path class="nqxm3wozy wm-shadow"/><path class="i2onpmbub"/><path class="u5ygvwb3z"/></g>`,
		"fallback": "withicons-brutal:arrow-left-to-line",
	});
}

export default Component;
