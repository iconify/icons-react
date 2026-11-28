import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mlhogcckt.css';
import '../../css/c/cj058b15h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mlhogcckt"/><path class="cj058b15h"/></g>`,
		"fallback": "iconaut:at-sign",
	});
}

export default Component;
