import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/c/c6n_3bcym.css';
import '../../css/f/ff69knbjn.css';
import '../../css/s/sp1othbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="c6n_3bcym"/><path class="ff69knbjn"/><path class="sp1othbmo"/></g>`,
		"fallback": "hugeicons:game-controller-03",
	});
}

export default Component;
