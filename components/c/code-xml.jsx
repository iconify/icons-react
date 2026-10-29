import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vgovwzbmp.css';
import '../../css/o/oycv71bfr.css';
import '../../css/r/rxp-h_bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vgovwzbmp"/><path class="oycv71bfr wm-a"/><path class="rxp-h_bzm"/></g>`,
		"fallback": "withicons:code-xml",
	});
}

export default Component;
