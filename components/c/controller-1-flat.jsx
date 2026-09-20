import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ambn2z-ng.css';
import '../../css/h/hx4kybc4s.css';
import '../../css/f/fa4vybbik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ambn2z-ng"/><path clip-rule="evenodd" class="hx4kybc4s"/><path class="fa4vybbik"/></g>`,
		"fallback": "streamline-plump-color:controller-1-flat",
	});
}

export default Component;
