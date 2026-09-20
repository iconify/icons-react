import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y2x08scfd.css';
import '../../css/s/smjehkzye.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y2x08scfd"/><path class="smjehkzye"/></g>`,
		"fallback": "streamline-color:chat-bubble-oval-smiley-1-flat",
	});
}

export default Component;
