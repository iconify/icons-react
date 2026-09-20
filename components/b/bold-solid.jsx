import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi8-nxbvm.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi8-nxbvm"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:bold-solid",
	});
}

export default Component;
