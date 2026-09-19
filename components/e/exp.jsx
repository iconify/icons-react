import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uyabtwq9s.css';
import '../../css/e/eho9kubzu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="uyabtwq9s"/><path class="eho9kubzu"/></g>`,
		"fallback": "cryptocurrency-color:exp",
	});
}

export default Component;
