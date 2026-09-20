import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v14metbtz.css';
import '../../css/l/lp-furb0m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v14metbtz"/><path class="lp-furb0m"/></g>`,
		"fallback": "streamline-color:factorial-flat",
	});
}

export default Component;
