import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvnmopbkw.css';
import '../../css/q/q0xe3qbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvnmopbkw"/><path clip-rule="evenodd" class="q0xe3qbbk"/>`,
		"fallback": "solar:flashlight-outline",
	});
}

export default Component;
