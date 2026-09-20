import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q82_asybb.css';
import '../../css/j/jz4z07ajo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q82_asybb"/><path class="jz4z07ajo"/>`,
		"fallback": "streamline-ultimate:drawer-upload-bold",
	});
}

export default Component;
