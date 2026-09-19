import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb0l32b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b mb0l32b0x"/>`,
		"fallback": "boxicons:gestures-filled",
	});
}

export default Component;
