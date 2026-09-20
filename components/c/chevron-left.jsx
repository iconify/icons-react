import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp6mn7brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp6mn7brp"/>`,
		"fallback": "majesticons:chevron-left",
	});
}

export default Component;
