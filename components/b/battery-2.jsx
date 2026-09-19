import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jswgxzn3t.css';
import '../../css/k/k5_q31_hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jswgxzn3t"/><path class="k5_q31_hd"/>`,
		"fallback": "boxicons:battery-2",
	});
}

export default Component;
