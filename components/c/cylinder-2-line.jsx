import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyx9a9liv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyx9a9liv"/>`,
		"fallback": "mingcute:cylinder-2-line",
	});
}

export default Component;
