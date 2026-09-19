import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyff0-91k.css';
import '../../css/a/a4sazmbph.css';
import '../../css/z/zsgksfvhc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyff0-91k"/><rect class="a4sazmbph"/><path clip-rule="evenodd" class="zsgksfvhc"/></g>`,
		"fallback": "glyphs-poly:briefcase-medical",
	});
}

export default Component;
