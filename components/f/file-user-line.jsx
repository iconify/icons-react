import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk5w4tbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk5w4tbdt"/>`,
		"fallback": "ri:file-user-line",
	});
}

export default Component;
