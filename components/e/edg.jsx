import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/miqu9uphg.css';
import '../../css/f/f9-0fjbmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="miqu9uphg"/><path class="f9-0fjbmd"/></g>`,
		"fallback": "cryptocurrency-color:edg",
	});
}

export default Component;
