import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5yhzkxgj.css';
import '../../css/c/cag2ndsks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5yhzkxgj"/><path class="cag2ndsks"/>`,
		"fallback": "bx:bx-camera-home",
	});
}

export default Component;
