import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t88koabfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t88koabfd"/>`,
		"fallback": "vadivam:arrow-up-to-line",
	});
}

export default Component;
