import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epeyy-b8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epeyy-b8m"/>`,
		"fallback": "tabler:ease-in-out",
	});
}

export default Component;
