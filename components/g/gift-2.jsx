import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0-uzvbqo.css';
import '../../css/n/n2_1awp8x.css';
import '../../css/p/pj_qzabvz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m0-uzvbqo"/><path class="n2_1awp8x"/><path class="pj_qzabvz"/></g>`,
		"fallback": "streamline-flex-color:gift-2",
	});
}

export default Component;
