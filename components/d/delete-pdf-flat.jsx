import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x38zvobax.css';
import '../../css/q/qe7nwrbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x38zvobax"/><path class="qe7nwrbck"/></g>`,
		"fallback": "streamline-sharp-color:delete-pdf-flat",
	});
}

export default Component;
