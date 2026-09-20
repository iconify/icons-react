import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9nuerp3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9nuerp3m"/>`,
		"fallback": "mingcute:broom-fill",
	});
}

export default Component;
