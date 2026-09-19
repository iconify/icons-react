import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4dq40b1b.css';
import '../../css/k/k_2ois9bt.css';
import '../../css/w/w5fsu1wxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4dq40b1b"/><path class="k_2ois9bt"/><path class="w5fsu1wxx"/>`,
		"fallback": "eos-icons:api",
	});
}

export default Component;
