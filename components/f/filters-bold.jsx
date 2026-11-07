import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c08ckl39y.css';
import '../../css/f/fdtedkyxq.css';
import '../../css/r/re8-x0t_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c08ckl39y"/><path class="fdtedkyxq"/><path class="re8-x0t_v"/>`,
		"fallback": "solar:filters-bold",
	});
}

export default Component;
