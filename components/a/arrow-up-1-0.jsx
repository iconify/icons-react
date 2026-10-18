import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q583cdggp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q583cdggp"/>`,
		"fallback": "vadivam:arrow-up-1-0",
	});
}

export default Component;
