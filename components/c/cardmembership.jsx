import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/byhi3osvb.css';
import '../../css/r/r04w-6b-i.css';
import '../../css/j/jx2ov01ct.css';
import '../../css/n/nnrx7v7kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="byhi3osvb"/><path class="r04w-6b-i"/><path class="jx2ov01ct"/><path class="nnrx7v7kb"/></g>`,
		"fallback": "tdesign:cardmembership",
	});
}

export default Component;
