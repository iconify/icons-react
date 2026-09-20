import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pa2w8ncyq.css';
import '../../css/x/xwmo3abon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pa2w8ncyq"/><path class="xwmo3abon"/></g>`,
		"fallback": "streamline-freehand-color:design-tool-quill",
	});
}

export default Component;
