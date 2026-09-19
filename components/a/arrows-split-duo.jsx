import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o310xqbbg.css';
import '../../css/r/remqlwbra.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o310xqbbg"/><path class="remqlwbra"/></g>`,
		"fallback": "glyphs:arrows-split-duo",
	});
}

export default Component;
