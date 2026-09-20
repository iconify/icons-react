import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4ge6fb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4ge6fb0u"/>`,
		"fallback": "mynaui:dots-circle-solid",
	});
}

export default Component;
