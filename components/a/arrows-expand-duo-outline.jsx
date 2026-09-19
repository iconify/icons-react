import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j06u54bkh.css';
import '../../css/t/trz_0bkyl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j06u54bkh"/><path class="trz_0bkyl"/></g>`,
		"fallback": "glyphs:arrows-expand-duo-outline",
	});
}

export default Component;
