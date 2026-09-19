import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkjm_jbla.css';
import '../../css/w/wqbkv8u2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkjm_jbla"/><path class="wqbkv8u2i"/>`,
		"fallback": "bx:bx-no-entry",
	});
}

export default Component;
