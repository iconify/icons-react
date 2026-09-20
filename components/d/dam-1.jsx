import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uy16f8b9w.css';
import '../../css/t/tq-hq3b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uy16f8b9w"/><path class="tq-hq3b8x"/></g>`,
		"fallback": "tdesign:dam-1",
	});
}

export default Component;
