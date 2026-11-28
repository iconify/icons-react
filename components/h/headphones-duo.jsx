import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr4slu2yq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j-t_sircu.css';
import '../../css/o/opary8-sc.css';
import '../../css/v/vh32usnkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr4slu2yq secondary"/><g class="dt0cm9dhy primary"><path class="j-t_sircu"/><path class="opary8-sc"/><path class="vh32usnkl"/></g>`,
		"fallback": "iconaut:headphones-duo",
	});
}

export default Component;
