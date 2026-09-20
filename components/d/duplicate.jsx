import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm5eixlye.css';
import '../../css/h/hgp61kd_e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hm5eixlye"/><path class="hgp61kd_e"/></g>`,
		"fallback": "pepicons-pencil:duplicate",
	});
}

export default Component;
