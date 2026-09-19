import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz9ucbcni.css';
import '../../css/j/j6-b0layc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wz9ucbcni"/><path class="j6-b0layc"/>`,
		"fallback": "bx:bxs-speaker",
	});
}

export default Component;
