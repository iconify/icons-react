import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g51j71bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g51j71bdr"/>`,
		"fallback": "majesticons:bus-line",
	});
}

export default Component;
