import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coe7vibui.css';
import '../../css/u/ud8fztbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coe7vibui"/><path clip-rule="evenodd" class="ud8fztbcj"/>`,
		"fallback": "solar:bell-ring-outline",
	});
}

export default Component;
