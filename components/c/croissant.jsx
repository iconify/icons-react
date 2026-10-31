import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jm1-edc3a.css';
import '../../css/e/euf7i3bem.css';
import '../../css/v/vobmysier.css';
import '../../css/z/zaqyk1vqh.css';
import '../../css/x/xr8nwyb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jm1-edc3a wm-shadow"/><path class="euf7i3bem"/><path class="vobmysier"/><path class="zaqyk1vqh"/><path class="xr8nwyb-n"/></g>`,
		"fallback": "withicons-retro:croissant",
	});
}

export default Component;
