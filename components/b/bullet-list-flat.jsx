import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/thku63brs.css';
import '../../css/f/fab0tgbhz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="thku63brs"/><path class="fab0tgbhz"/></g>`,
		"fallback": "streamline-color:bullet-list-flat",
	});
}

export default Component;
