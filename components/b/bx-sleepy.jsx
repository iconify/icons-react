import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqbkv8u2i.css';
import '../../css/s/s318qib4y.css';
import '../../css/b/bj4ojtbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqbkv8u2i"/><ellipse class="s318qib4y"/><path class="bj4ojtbak"/>`,
		"fallback": "bx:bx-sleepy",
	});
}

export default Component;
