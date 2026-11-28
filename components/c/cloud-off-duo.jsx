import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkgs06hvj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i3frhyb2m.css';
import '../../css/c/c3c_ciakh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkgs06hvj secondary"/><g class="dt0cm9dhy primary"><path class="i3frhyb2m"/><path class="c3c_ciakh"/></g>`,
		"fallback": "iconaut:cloud-off-duo",
	});
}

export default Component;
