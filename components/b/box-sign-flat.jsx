import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iorhqikzn.css';
import '../../css/h/hrn3dgb9u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iorhqikzn"/><path class="hrn3dgb9u"/></g>`,
		"fallback": "streamline-color:box-sign-flat",
	});
}

export default Component;
