import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jswgxzn3t.css';
import '../../css/u/u5z_1ibwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jswgxzn3t"/><path class="u5z_1ibwy"/>`,
		"fallback": "boxicons:battery-low",
	});
}

export default Component;
