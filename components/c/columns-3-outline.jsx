import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yex1s8b9e.css';
import '../../css/f/f59souboe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yex1s8b9e"/><path class="f59souboe"/></g>`,
		"fallback": "glyphs:columns-3-outline",
	});
}

export default Component;
