import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr175gb2k.css';
import '../../css/o/o_2g-rbfd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nr175gb2k"/><path class="o_2g-rbfd"/></g>`,
		"fallback": "glyphs-poly:hand-holding-water",
	});
}

export default Component;
