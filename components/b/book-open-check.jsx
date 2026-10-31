import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f6nre5nml.css';
import '../../css/l/loot99_vz.css';
import '../../css/j/jf5pg2b8z.css';
import '../../css/h/hskdskbdu.css';
import '../../css/b/bky-jp7xa.css';
import '../../css/n/n7f9fy5-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f6nre5nml wm-shadow"/><path class="loot99_vz"/><path class="jf5pg2b8z"/><path class="hskdskbdu"/><path class="bky-jp7xa"/><path class="n7f9fy5-p"/></g>`,
		"fallback": "withicons-retro:book-open-check",
	});
}

export default Component;
