import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_d063p8k.css';
import '../../css/n/nm8on7bej.css';
import '../../css/l/lxxaunp0b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a_d063p8k"/><path class="nm8on7bej"/><path class="lxxaunp0b"/></g>`,
		"fallback": "glyphs:helicopter-duo",
	});
}

export default Component;
