import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y826uzbnv.css';
import '../../css/z/z-gh19h4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y826uzbnv"/><path class="z-gh19h4t"/></g>`,
		"fallback": "streamline-sharp-color:cleaning-room-woman-flat",
	});
}

export default Component;
