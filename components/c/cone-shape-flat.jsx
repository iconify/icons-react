import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/js9l_ix0e.css';
import '../../css/v/vylaaccip.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="js9l_ix0e"/><path class="vylaaccip"/></g>`,
		"fallback": "streamline-color:cone-shape-flat",
	});
}

export default Component;
