import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bpyq7fbrw.css';
import '../../css/g/g0hx94knb.css';
import '../../css/a/awe8oqbza.css';
import '../../css/s/sn3f9aciw.css';
import '../../css/o/oct0mfuyr.css';
import '../../css/q/qea38kpib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bpyq7fbrw wm-shadow"/><path class="g0hx94knb"/><path class="awe8oqbza"/><path class="sn3f9aciw"/><path class="oct0mfuyr wm-s"/><path class="qea38kpib"/></g>`,
		"fallback": "withicons-retro:holi-splash",
	});
}

export default Component;
