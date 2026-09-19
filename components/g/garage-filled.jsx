import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnu-_5bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnu-_5bim"/>`,
		"fallback": "boxicons:garage-filled",
	});
}

export default Component;
