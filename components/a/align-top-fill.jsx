import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3vfqt30y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a3vfqt30y"/>`,
		"fallback": "mingcute:align-top-fill",
	});
}

export default Component;
