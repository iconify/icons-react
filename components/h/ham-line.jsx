import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zudpwdv0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zudpwdv0i"/>`,
		"fallback": "mingcute:ham-line",
	});
}

export default Component;
