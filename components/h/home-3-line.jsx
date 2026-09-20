import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5eqilbmm.css';
import '../../css/s/s5h2abbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5eqilbmm"/><path class="s5h2abbxi"/>`,
		"fallback": "mingcute:home-3-line",
	});
}

export default Component;
