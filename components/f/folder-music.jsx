import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sz6vb1uxi.css';
import '../../css/u/ud5c6fcjr.css';
import '../../css/u/u_408nh1i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="sz6vb1uxi"/><path class="ud5c6fcjr"/><circle class="u_408nh1i"/></g>`,
		"fallback": "icon-park-outline:folder-music",
	});
}

export default Component;
