import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v96w-6bir.css';
import '../../css/x/xqeu_ebrh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v96w-6bir"/><path class="xqeu_ebrh"/></g>`,
		"fallback": "glyphs-poly:border-inner",
	});
}

export default Component;
