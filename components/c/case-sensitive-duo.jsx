import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x_m31ivmz.css';
import '../../css/f/fbuw7xbwj.css';
import '../../css/l/lbpq4tbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x_m31ivmz"/><path class="fbuw7xbwj"/><path class="lbpq4tbep"/></g>`,
		"fallback": "iconaut:case-sensitive-duo",
	});
}

export default Component;
