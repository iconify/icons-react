import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gjtl4ccxk.css';
import '../../css/i/i_yrg7bbh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gjtl4ccxk"/><path class="i_yrg7bbh"/></g>`,
		"fallback": "streamline-color:hospital-sign-square-flat",
	});
}

export default Component;
