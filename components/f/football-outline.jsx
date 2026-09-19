import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6xt5c87v.css';
import '../../css/n/n_fmt7b_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j6xt5c87v"/><path class="n_fmt7b_d"/>`,
		"fallback": "ion:football-outline",
	});
}

export default Component;
