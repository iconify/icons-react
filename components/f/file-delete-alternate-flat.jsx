import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fwuwcgerz.css';
import '../../css/p/ps_uxk5np.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fwuwcgerz"/><path class="ps_uxk5np"/></g>`,
		"fallback": "streamline-color:file-delete-alternate-flat",
	});
}

export default Component;
