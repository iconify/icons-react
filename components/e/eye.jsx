import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/e6jcrmbkj.css';
import '../../css/p/pzvl44b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="e6jcrmbkj"/><path class="pzvl44b2g"/></g>`,
		"fallback": "guidance:eye",
	});
}

export default Component;
