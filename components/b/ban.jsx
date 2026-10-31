import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/u/u9aii1bwo.css';
import '../../css/h/h7jc27jvk.css';
import '../../css/f/fi7jusbwz.css';
import '../../css/b/bshzyac7d.css';
import '../../css/t/tdw65jp7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="u9aii1bwo"/><path class="h7jc27jvk"/><path class="fi7jusbwz"/><path class="bshzyac7d"/><path class="tdw65jp7c"/></g>`,
		"fallback": "withicons-retro:ban",
	});
}

export default Component;
