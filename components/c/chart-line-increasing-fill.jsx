import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq99pwd1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq99pwd1i"/>`,
		"fallback": "keyline-icons:chart-line-increasing-fill",
	});
}

export default Component;
