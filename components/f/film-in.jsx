import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w69pz5srx.css';
import '../../css/q/qkft99b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w69pz5srx"/><path class="qkft99b2j"/></g>`,
		"fallback": "andrsrxn:film-in",
	});
}

export default Component;
