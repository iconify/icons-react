import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec1jb1alf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec1jb1alf"/>`,
		"fallback": "mingcute:alarm-2-fill",
	});
}

export default Component;
