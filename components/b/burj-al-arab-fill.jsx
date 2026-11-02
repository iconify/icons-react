import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa3y0g5gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa3y0g5gp"/>`,
		"fallback": "mingcute:burj-al-arab-fill",
	});
}

export default Component;
