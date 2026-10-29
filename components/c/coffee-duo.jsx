import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m8nybubas.css';
import '../../css/g/g9g2iobxb.css';
import '../../css/o/o7ull5bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m8nybubas"/><path class="g9g2iobxb wm-a"/><path class="o7ull5bnt"/></g>`,
		"fallback": "withicons:coffee-duo",
	});
}

export default Component;
