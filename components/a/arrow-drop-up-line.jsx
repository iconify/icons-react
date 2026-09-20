import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhlsyklwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhlsyklwn"/>`,
		"fallback": "ri:arrow-drop-up-line",
	});
}

export default Component;
