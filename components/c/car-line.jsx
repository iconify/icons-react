import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9mk-kbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9mk-kbpx"/>`,
		"fallback": "mingcute:car-line",
	});
}

export default Component;
