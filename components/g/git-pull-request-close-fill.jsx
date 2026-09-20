import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqx9h12wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqx9h12wb"/>`,
		"fallback": "mingcute:git-pull-request-close-fill",
	});
}

export default Component;
