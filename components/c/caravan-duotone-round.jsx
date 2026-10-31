import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj9kkwbwe.css';
import '../../css/z/zz1cu7bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hj9kkwbwe"/><path class="zz1cu7bvo"/></g>`,
		"fallback": "coolicons:caravan-duotone-round",
	});
}

export default Component;
