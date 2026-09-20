import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w5ru-mdfn.css';
import '../../css/b/b_j5fd8xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w5ru-mdfn"/><path class="b_j5fd8xo"/></g>`,
		"fallback": "streamline-sharp-color:cake-flat",
	});
}

export default Component;
