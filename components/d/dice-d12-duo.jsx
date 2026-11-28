import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw9iob98a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mc3mgsj4s.css';
import '../../css/g/gf0tmd4ae.css';
import '../../css/s/s_pjkubwx.css';
import '../../css/p/pn14c0bsy.css';
import '../../css/u/umkz692mm.css';
import '../../css/j/jff7_x18f.css';
import '../../css/i/ik28kactb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zw9iob98a"/><g class="dt0cm9dhy primary"><path class="mc3mgsj4s"/><path class="gf0tmd4ae"/><path class="s_pjkubwx"/><path class="pn14c0bsy"/><path class="umkz692mm"/><path class="jff7_x18f"/><path class="ik28kactb"/></g>`,
		"fallback": "iconaut:dice-d12-duo",
	});
}

export default Component;
