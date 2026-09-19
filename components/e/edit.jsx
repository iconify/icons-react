import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klqzlfb6u.css';
import '../../css/b/bfbxrvtsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klqzlfb6u"/><path class="bfbxrvtsk"/>`,
		"fallback": "bx:edit",
	});
}

export default Component;
