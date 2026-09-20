import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekb1_zbwi.css';
import '../../css/d/djx8tfb_v.css';
import '../../css/e/eigneeb2w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ekb1_zbwi"/><path class="djx8tfb_v"/><path class="eigneeb2w"/></g>`,
		"fallback": "streamline-color:add-layer-2",
	});
}

export default Component;
