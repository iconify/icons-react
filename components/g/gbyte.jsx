import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z61wt6vzm.css';
import '../../css/f/f7vj_fblh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="z61wt6vzm"/><circle class="f7vj_fblh"/></g>`,
		"fallback": "cryptocurrency-color:gbyte",
	});
}

export default Component;
