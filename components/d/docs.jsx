import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dlx2ec6bv.css';
import '../../css/t/t4xlwxbud.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="dlx2ec6bv"/><path class="t4xlwxbud"/></g>`,
		"fallback": "glyphs-poly:docs",
	});
}

export default Component;
