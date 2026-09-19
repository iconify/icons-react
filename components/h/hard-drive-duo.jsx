import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5eb5rb5w.css';
import '../../css/k/kkocbubzf.css';
import '../../css/c/ctpho9xop.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q5eb5rb5w"/><path class="kkocbubzf"/><path class="ctpho9xop"/></g>`,
		"fallback": "glyphs:hard-drive-duo",
	});
}

export default Component;
