import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzejfbbgu.css';
import '../../css/s/s0q6m7bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzejfbbgu"/><path class="s0q6m7bvk"/>`,
		"fallback": "streamline-ultimate:earth-cash-bold",
	});
}

export default Component;
