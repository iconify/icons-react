import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bum_u10rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bum_u10rj"/>`,
		"fallback": "mingcute:ear-line",
	});
}

export default Component;
