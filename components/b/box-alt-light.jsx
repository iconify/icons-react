import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fxvesbcqn.css';
import '../../css/s/snx9u9blb.css';
import '../../css/h/hv9wxdvso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="fxvesbcqn"/><path class="snx9u9blb"/><path class="hv9wxdvso"/></g>`,
		"fallback": "lets-icons:box-alt-light",
	});
}

export default Component;
