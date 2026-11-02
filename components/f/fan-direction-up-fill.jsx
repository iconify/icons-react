import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf-55cwyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf-55cwyl"/>`,
		"fallback": "mingcute:fan-direction-up-fill",
	});
}

export default Component;
