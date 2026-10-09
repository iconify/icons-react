import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmxr2fy_x.css';
import '../../css/j/j3eacdoxs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmxr2fy_x"/><path class="j3eacdoxs"/>`,
		"fallback": "energy-icons:eye-48",
	});
}

export default Component;
