import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo9kftbtp.css';
import '../../css/u/u2hnframu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo9kftbtp"/><path class="u2hnframu"/>`,
		"fallback": "boxicons:broadcast",
	});
}

export default Component;
