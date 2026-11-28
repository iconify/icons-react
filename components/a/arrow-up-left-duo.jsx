import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kb5n4ubtn.css';
import '../../css/d/dez1l0bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kb5n4ubtn"/><path class="dez1l0bxr"/></g>`,
		"fallback": "iconaut:arrow-up-left-duo",
	});
}

export default Component;
