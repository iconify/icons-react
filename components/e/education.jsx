import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mpr19ccyx.css';
import '../../css/o/ox2f6xb_t.css';
import '../../css/c/cjd1zynuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mpr19ccyx"/><path class="ox2f6xb_t"/><path class="cjd1zynuz"/></g>`,
		"fallback": "tdesign:education",
	});
}

export default Component;
