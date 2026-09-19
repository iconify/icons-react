import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5xymnzul.css';
import '../../css/y/y1nb_hosg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5xymnzul"/><path class="y1nb_hosg"/>`,
		"fallback": "boxicons:edit-filled",
	});
}

export default Component;
