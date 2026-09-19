import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgjm5x1et.css';
import '../../css/a/as_05lbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pgjm5x1et"/><path class="as_05lbbh"/></g>`,
		"fallback": "healthicons:contraceptive-diaphragm-24px",
	});
}

export default Component;
