import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da0gk7k2m.css';
import '../../css/x/xqb173b4k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="da0gk7k2m"/><path class="xqb173b4k"/></g>`,
		"fallback": "glyphs-poly:bolt-1",
	});
}

export default Component;
