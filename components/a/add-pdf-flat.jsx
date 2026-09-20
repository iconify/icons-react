import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l6iw46bjt.css';
import '../../css/o/omxe6xbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l6iw46bjt"/><path class="omxe6xbzz"/></g>`,
		"fallback": "streamline-sharp-color:add-pdf-flat",
	});
}

export default Component;
