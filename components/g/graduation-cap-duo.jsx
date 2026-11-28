import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofpmm7bmn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtk28sbwi.css';
import '../../css/h/hme0rabnh.css';
import '../../css/r/req8k0dco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofpmm7bmn secondary"/><g class="dt0cm9dhy primary"><path class="gtk28sbwi"/><path class="hme0rabnh"/><path class="req8k0dco"/></g>`,
		"fallback": "iconaut:graduation-cap-duo",
	});
}

export default Component;
