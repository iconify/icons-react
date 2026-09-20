import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxun0i9ht.css';
import '../../css/f/fv6-xvb7i.css';
import '../../css/c/cl91aabbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rxun0i9ht"/><path class="fv6-xvb7i"/><path class="cl91aabbd"/></g>`,
		"fallback": "streamline-cyber-color:credit-card-edit",
	});
}

export default Component;
