import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3ft01_fn.css';
import '../../css/c/chkgjf_vd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3ft01_fn"/><path class="chkgjf_vd"/></g>`,
		"fallback": "glyphs:bezier-diamond-duo",
	});
}

export default Component;
