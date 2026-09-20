import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g0qp856lz.css';
import '../../css/m/mg4qrgb4v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g0qp856lz"/><path class="mg4qrgb4v"/></g>`,
		"fallback": "streamline-flex-color:allergens-fish-flat",
	});
}

export default Component;
