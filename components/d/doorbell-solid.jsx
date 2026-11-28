import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqg93z-sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqg93z-sl"/>`,
		"fallback": "iconaut:doorbell-solid",
	});
}

export default Component;
