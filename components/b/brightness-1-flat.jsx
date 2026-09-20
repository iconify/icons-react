import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ejfwx9bmb.css';
import '../../css/c/c55avbbis.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ejfwx9bmb"/><path class="c55avbbis"/></g>`,
		"fallback": "streamline-flex-color:brightness-1-flat",
	});
}

export default Component;
