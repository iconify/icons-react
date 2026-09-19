import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qaag9qftd.css';
import '../../css/e/ebt_l0bma.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qaag9qftd"/><path class="ebt_l0bma"/></g>`,
		"fallback": "cryptocurrency-color:booty",
	});
}

export default Component;
