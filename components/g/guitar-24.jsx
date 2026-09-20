import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm_h54lxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm_h54lxr"/>`,
		"fallback": "qlementine-icons:guitar-24",
	});
}

export default Component;
