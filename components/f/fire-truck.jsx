import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ij3vyybgh.css';
import '../../css/w/w3i1zx0jw.css';
import '../../css/f/f033g23se.css';
import '../../css/r/r3tjbrb0o.css';
import '../../css/l/lxgzncafa.css';
import '../../css/h/hub3dvsur.css';
import '../../css/b/brepdob_g.css';
import '../../css/p/pri2lwmja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ij3vyybgh"/><path class="w3i1zx0jw"/><path class="f033g23se"/><path class="r3tjbrb0o"/><path class="lxgzncafa"/><path class="hub3dvsur"/><path class="brepdob_g"/><path class="pri2lwmja"/></g>`,
		"fallback": "iconaut:fire-truck",
	});
}

export default Component;
