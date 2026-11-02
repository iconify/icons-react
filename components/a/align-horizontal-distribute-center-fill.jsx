import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to5xdiblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to5xdiblt"/>`,
		"fallback": "mingcute:align-horizontal-distribute-center-fill",
	});
}

export default Component;
