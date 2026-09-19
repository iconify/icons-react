import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtl61lbwj.css';
import '../../css/w/wckjfubqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtl61lbwj"/><path clip-rule="evenodd" class="wckjfubqk"/>`,
		"fallback": "basil:facebook-messenger-outline",
	});
}

export default Component;
