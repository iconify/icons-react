import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7vn3acim.css';
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
		"content": `<path class="secondary x7vn3acim"/><g class="dt0cm9dhy primary"><path class="voyx-49xj"/><path class="vsmubdx_a"/><path class="pmtkcackh"/></g>`,
		"fallback": "iconaut:chess-knight-duo",
	});
}

export default Component;
