import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0bj6zbkt.css';
import '../../css/k/k82jeybsw.css';
import '../../css/b/bxflyli6b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a0bj6zbkt"/><path class="k82jeybsw"/><path class="bxflyli6b"/></g>`,
		"fallback": "glyphs-poly:comment-question",
	});
}

export default Component;
