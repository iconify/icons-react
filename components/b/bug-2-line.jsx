import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq10eib1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq10eib1l"/>`,
		"fallback": "majesticons:bug-2-line",
	});
}

export default Component;
