import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksw8ll90a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksw8ll90a"/>`,
		"fallback": "majesticons:close-line",
	});
}

export default Component;
