import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug6f-tjsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug6f-tjsm"/>`,
		"fallback": "bxs:comment-error",
	});
}

export default Component;
