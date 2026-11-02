import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acrf5cy9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acrf5cy9z"/>`,
		"fallback": "mingcute:git-pull-request-create-fill",
	});
}

export default Component;
