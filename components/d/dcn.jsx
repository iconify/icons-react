import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s9g7-0bsg.css';
import '../../css/k/k94q8zj4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="s9g7-0bsg"/><path class="k94q8zj4p"/></g>`,
		"fallback": "cryptocurrency-color:dcn",
	});
}

export default Component;
