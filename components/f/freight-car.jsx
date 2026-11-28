import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lfrb--gjy.css';
import '../../css/m/mz1560bnj.css';
import '../../css/i/ixbwkv4mz.css';
import '../../css/u/ur3_tunjd.css';
import '../../css/z/z0tnwqkof.css';
import '../../css/h/hbet5lb3f.css';
import '../../css/b/b_rls5bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lfrb--gjy"/><path class="mz1560bnj"/><path class="ixbwkv4mz"/><path class="ur3_tunjd"/><path class="z0tnwqkof"/><path class="hbet5lb3f"/><path class="b_rls5bky"/></g>`,
		"fallback": "iconaut:freight-car",
	});
}

export default Component;
