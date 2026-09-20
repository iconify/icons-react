import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mo1lc1g4z.css';
import '../../css/e/eb98p0tcq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mo1lc1g4z"/><path class="eb98p0tcq"/></g>`,
		"fallback": "streamline-flex-color:browser-dashboard-flat",
	});
}

export default Component;
