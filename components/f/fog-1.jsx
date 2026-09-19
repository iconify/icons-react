import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ypr156bzj.css';
import '../../css/t/tjh-5cc4p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ypr156bzj"/><path class="tjh-5cc4p"/></g>`,
		"fallback": "glyphs-poly:fog-1",
	});
}

export default Component;
