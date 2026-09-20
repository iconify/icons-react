import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hf8k-9upk.css';
import '../../css/f/f1lq49bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hf8k-9upk"/><path class="f1lq49bia"/></g>`,
		"fallback": "streamline-freehand-color:design-tool-stamp",
	});
}

export default Component;
