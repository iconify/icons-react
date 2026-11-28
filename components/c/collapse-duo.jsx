import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d3--f9bxt.css';
import '../../css/l/l6185mb2v.css';
import '../../css/s/ssxb6oabf.css';
import '../../css/a/a7exq6baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d3--f9bxt"/><path class="l6185mb2v"/><path class="ssxb6oabf"/><path class="a7exq6baw"/></g>`,
		"fallback": "iconaut:collapse-duo",
	});
}

export default Component;
