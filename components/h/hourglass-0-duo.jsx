import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcxbg4bau.css';
import '../../css/g/grq3s_b1n.css';
import '../../css/y/y79as4lbn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zcxbg4bau"/><path class="grq3s_b1n"/><path class="y79as4lbn"/></g>`,
		"fallback": "glyphs:hourglass-0-duo",
	});
}

export default Component;
