import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsnmn6bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsnmn6bud"/>`,
		"fallback": "mingcute:corner-up-right-fill",
	});
}

export default Component;
