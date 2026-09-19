import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnq0g0eje.css';
import '../../css/d/do56rl02a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vnq0g0eje"/><path class="do56rl02a"/></g>`,
		"fallback": "feather:check-square",
	});
}

export default Component;
