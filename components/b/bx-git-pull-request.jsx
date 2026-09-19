import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i72vq7bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i72vq7bjp"/>`,
		"fallback": "bx:bx-git-pull-request",
	});
}

export default Component;
