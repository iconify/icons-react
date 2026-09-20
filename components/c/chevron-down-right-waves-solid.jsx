import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1ax39u0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1ax39u0m"/>`,
		"fallback": "mynaui:chevron-down-right-waves-solid",
	});
}

export default Component;
