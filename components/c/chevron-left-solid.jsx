import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzk-88c7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzk-88c7o"/>`,
		"fallback": "mynaui:chevron-left-solid",
	});
}

export default Component;
