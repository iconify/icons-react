import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/ln3ndib4z.css';
import '../../css/x/xql2z6rng.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ln3ndib4z"/><path class="xql2z6rng"/></g>`,
		"fallback": "streamline-flex-color:hierarchy-16-flat",
	});
}

export default Component;
