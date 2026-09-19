import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2l086bip.css';
import '../../css/i/iqk83abwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2l086bip"/><path class="iqk83abwf"/>`,
		"fallback": "boxicons:egg-fried",
	});
}

export default Component;
