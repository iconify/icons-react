import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1_wjijeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1_wjijeg"/>`,
		"fallback": "mingcute:hair-line",
	});
}

export default Component;
