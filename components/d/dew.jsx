import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u6on1eb2l.css';
import '../../css/i/im-g-acsh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="u6on1eb2l"/><path class="im-g-acsh"/></g>`,
		"fallback": "cryptocurrency-color:dew",
	});
}

export default Component;
