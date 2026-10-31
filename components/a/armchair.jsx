import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sc__gn8gp.css';
import '../../css/y/ymh26rb5b.css';
import '../../css/j/jb9paoben.css';
import '../../css/v/vt7rf7b1g.css';
import '../../css/z/zft4602ov.css';
import '../../css/s/s6e7ucn8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sc__gn8gp wm-shadow"/><path class="ymh26rb5b"/><path class="jb9paoben"/><path class="vt7rf7b1g"/><path class="zft4602ov"/><path class="s6e7ucn8e"/></g>`,
		"fallback": "withicons-retro:armchair",
	});
}

export default Component;
