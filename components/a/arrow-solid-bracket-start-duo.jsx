import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zamr51bkd.css';
import '../../css/o/o9ej7uboh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zamr51bkd"/><path class="o9ej7uboh"/></g>`,
		"fallback": "glyphs:arrow-solid-bracket-start-duo",
	});
}

export default Component;
