import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqt0apbuo.css';
import '../../css/c/cs3y-wbcc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eqt0apbuo"/><path class="cs3y-wbcc"/></g>`,
		"fallback": "glyphs:edit-1-duo",
	});
}

export default Component;
