import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hp6_oab4l.css';
import '../../css/t/t1pcaj3hz.css';
import '../../css/g/gx298nb0l.css';
import '../../css/z/zr27td08a.css';
import '../../css/p/prkcl0bmj.css';
import '../../css/j/jr2enrb5p.css';
import '../../css/r/rpr1chqfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hp6_oab4l wm-k"/><path class="t1pcaj3hz wm-deco"/><path class="gx298nb0l wm-k"/><path class="wm-k zr27td08a"/><path class="prkcl0bmj wm-shadow"/><path class="jr2enrb5p wm-shine"/><path class="rpr1chqfd wm-shine"/></g>`,
		"fallback": "withicons-valentine:hard-drive",
	});
}

export default Component;
