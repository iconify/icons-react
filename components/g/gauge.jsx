import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rch4b20wr.css';
import '../../css/f/fol11_ihm.css';
import '../../css/v/vu7kjj19z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rch4b20wr"/><path class="fol11_ihm"/><path class="vu7kjj19z"/></g>`,
		"fallback": "iconaut:gauge",
	});
}

export default Component;
