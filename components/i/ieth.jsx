import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7hsp1bfr.css';
import '../../css/b/bn2tkibzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7hsp1bfr"/><path class="bn2tkibzc"/>`,
		"fallback": "token:ieth",
	});
}

export default Component;
