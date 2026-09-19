import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dfqr0kbzb.css';
import '../../css/f/fqjhgebbw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="dfqr0kbzb"/><path class="fqjhgebbw"/></g>`,
		"fallback": "cryptocurrency-color:cnd",
	});
}

export default Component;
