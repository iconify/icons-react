import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6ohv32yu.css';
import '../../css/u/u-w-26vcx.css';
import '../../css/t/t--kh_brw.css';
import '../../css/z/zmlixrbxk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d6ohv32yu"/><path class="u-w-26vcx"/><path class="t--kh_brw"/><path class="zmlixrbxk"/></g>`,
		"fallback": "glyphs-poly:building",
	});
}

export default Component;
