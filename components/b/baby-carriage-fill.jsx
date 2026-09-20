import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhh4hmb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhh4hmb8e"/>`,
		"fallback": "mingcute:baby-carriage-fill",
	});
}

export default Component;
