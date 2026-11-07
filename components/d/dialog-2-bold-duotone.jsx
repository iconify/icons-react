import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcgghzbvl.css';
import '../../css/i/inyn_6bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mcgghzbvl"/><path class="inyn_6bav"/>`,
		"fallback": "solar:dialog-2-bold-duotone",
	});
}

export default Component;
