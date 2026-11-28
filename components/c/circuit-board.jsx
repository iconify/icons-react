import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/l/l186xo4yd.css';
import '../../css/h/h3huvcbuf.css';
import '../../css/n/nrioy-b4f.css';
import '../../css/n/nkt7a4b-t.css';
import '../../css/t/t_2pmdbui.css';
import '../../css/v/vgyyxkcix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mie31z6an"/><path class="l186xo4yd"/><path class="h3huvcbuf"/><path class="nrioy-b4f"/><path class="nkt7a4b-t"/><path class="t_2pmdbui"/><path class="vgyyxkcix"/></g>`,
		"fallback": "iconaut:circuit-board",
	});
}

export default Component;
