import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dsg8etb0g.css';
import '../../css/h/h-o8cwh1v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="dsg8etb0g"/><path class="h-o8cwh1v"/></g>`,
		"fallback": "cryptocurrency-color:cmt",
	});
}

export default Component;
