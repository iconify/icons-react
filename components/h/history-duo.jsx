import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eofoofwhl.css';
import '../../css/g/gghbe1uay.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eofoofwhl"/><path class="gghbe1uay"/></g>`,
		"fallback": "glyphs:history-duo",
	});
}

export default Component;
