import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et7yk-bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et7yk-bun"/>`,
		"fallback": "boxicons:highlights",
	});
}

export default Component;
