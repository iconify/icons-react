import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmk3y5beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmk3y5beo"/>`,
		"fallback": "mingcute:inbox-2-fill",
	});
}

export default Component;
