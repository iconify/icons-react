import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok3bfoi4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok3bfoi4u"/>`,
		"fallback": "ri:ai-generate-2-line",
	});
}

export default Component;
