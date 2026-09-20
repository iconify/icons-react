import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdngy1b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdngy1b-b"/>`,
		"fallback": "weui:eyes-off-filled",
	});
}

export default Component;
