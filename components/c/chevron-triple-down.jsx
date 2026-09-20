import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/ab6j9p.css';
import '../../css/j/jzrnzz.css';
import '../../css/x/xr4k_q.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ab6j9p"/><path class="a0m25c jzrnzz"/><path class="a0m25c xr4k_q"/>`,
		"fallback": "line-md:chevron-triple-down",
	});
}

export default Component;
