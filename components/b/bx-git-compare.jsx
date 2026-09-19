import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz9097b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz9097b4d"/>`,
		"fallback": "bx:bx-git-compare",
	});
}

export default Component;
