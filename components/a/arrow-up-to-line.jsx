import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/urex7lgqu.css';
import '../../css/c/cad4hcf2h.css';
import '../../css/f/fwvwu22pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="urex7lgqu"/><path class="cad4hcf2h"/><path class="fwvwu22pc"/></g>`,
		"fallback": "iconaut:arrow-up-to-line",
	});
}

export default Component;
