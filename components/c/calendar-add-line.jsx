import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tztclnbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tztclnbck"/>`,
		"fallback": "mingcute:calendar-add-line",
	});
}

export default Component;
