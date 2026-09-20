import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/s/sh6w8v.css';
import '../../css/g/g6s5_g.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c sh6w8v"/><path class="a0m25c g6s5_g"/>`,
		"fallback": "line-md:arrows-long-diagonal",
	});
}

export default Component;
