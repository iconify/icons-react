import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2obbm2nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2obbm2nf"/>`,
		"fallback": "mingcute:align-right-line",
	});
}

export default Component;
