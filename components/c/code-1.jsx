import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pja3-dbvx.css';
import '../../css/x/xkjm40j0v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="pja3-dbvx"/><path class="xkjm40j0v"/></g>`,
		"fallback": "glyphs-poly:code-1",
	});
}

export default Component;
