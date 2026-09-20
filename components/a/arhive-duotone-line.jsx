import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cfgmwlw-y.css';
import '../../css/j/j2ngti4pb.css';
import '../../css/b/b3wyq1btu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cfgmwlw-y"/><path class="j2ngti4pb"/><path class="b3wyq1btu"/></g>`,
		"fallback": "lets-icons:arhive-duotone-line",
	});
}

export default Component;
