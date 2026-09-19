import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y537ghbmn.css';
import '../../css/j/jcq4o_b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y537ghbmn"/><path class="jcq4o_b8j"/>`,
		"fallback": "boxicons:camera-home",
	});
}

export default Component;
