import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/voyx-49xj.css';
import '../../css/v/vsmubdx_a.css';
import '../../css/p/pmtkcackh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="voyx-49xj"/><path class="vsmubdx_a"/><path class="pmtkcackh"/></g>`,
		"fallback": "iconaut:chess-knight",
	});
}

export default Component;
