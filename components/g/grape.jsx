import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o58ki4xzb.css';
import '../../css/r/rqm19ab5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o58ki4xzb"/><path class="rqm19ab5o"/></g>`,
		"fallback": "tdesign:grape",
	});
}

export default Component;
