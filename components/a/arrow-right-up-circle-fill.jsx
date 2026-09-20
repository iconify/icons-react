import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijysev5_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijysev5_g"/>`,
		"fallback": "mingcute:arrow-right-up-circle-fill",
	});
}

export default Component;
