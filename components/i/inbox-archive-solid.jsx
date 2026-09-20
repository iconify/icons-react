import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck8nk4b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck8nk4b3r"/>`,
		"fallback": "mynaui:inbox-archive-solid",
	});
}

export default Component;
