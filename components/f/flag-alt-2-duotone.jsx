import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/so0ltn-da.css';
import '../../css/j/jkfoz_8kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="so0ltn-da"/><path class="jkfoz_8kd"/></g>`,
		"fallback": "si:flag-alt-2-duotone",
	});
}

export default Component;
