import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/f/fxujr-byn.css';
import '../../css/j/jx2j5ujxg.css';
import '../../css/a/afrxd3bde.css';
import '../../css/b/bg3dj-bbo.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/w/w0uecybzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="fxujr-byn wm-a"/><path class="jx2j5ujxg wm-a"/><path class="afrxd3bde wm-a"/><path class="bg3dj-bbo"/><path class="d3y9mw6db"/><path class="w0uecybzn wm-a"/></g>`,
		"fallback": "withicons:avatar-baby-duo",
	});
}

export default Component;
