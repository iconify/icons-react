import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abfn7falh.css';
import '../../css/p/pupgf8bdc.css';
import '../../css/a/a1lb80bow.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="abfn7falh"/><rect class="pupgf8bdc"/><path class="a1lb80bow"/></g>`,
		"fallback": "glyphs-poly:center-focus-strong",
	});
}

export default Component;
